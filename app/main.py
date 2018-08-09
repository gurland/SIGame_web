from flask import Flask, render_template, redirect, request, url_for, flash, abort
from flask_login import LoginManager, login_user, current_user
from peewee import DoesNotExist

from models import User
from utils import confirm_token, generate_confirmation_token
from tasks import send_activation_email

app = Flask(__name__)
app.config.from_pyfile('config.py')
app.secret_key = 'secret'

lm = LoginManager()
lm.init_app(app)


@lm.user_loader
def load_user(user_id):
    try:
        return User.get(login=user_id)
    except DoesNotExist:
        return


@app.route("/")
def index():
    if not current_user.is_authenticated:
        return redirect(url_for('authentication'))

    return redirect(url_for('game_page'))


@app.route('/game')
def game_page():
    if not current_user.is_authenticated:
        return redirect(url_for('authentication'))

    return render_template('menu.html')


@app.route('/authentication')
def authentication():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    return render_template('auth.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    def bad_login_redirect():
        flash('Неправильный логин и/или пароль')
        return redirect(url_for('index'))

    if not request.method == 'POST':
        return redirect(url_for('index'))

    login_str = request.form['login']
    password = request.form['password']

    try:
        user_model = User.get(login=login_str)
        if user_model.check_password(password) and user_model.is_active():
            user = user_model

        elif user_model.check_password(password) and not user_model.is_active():
            flash('Активируйте свой аккаунт!')
            return redirect(url_for('index'))

        else:
            return bad_login_redirect()

    except DoesNotExist:
        return bad_login_redirect()

    login_user(user)
    return redirect(url_for('index'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login_str = request.form['login']
    email = request.form['email']
    password = request.form['password']

    exist_query = User.select().where((User.login == login_str) | (User.email == email))

    if exist_query:
        flash('Такой пользователь уже существует')
        return render_template('auth.html')

    u = User()
    u.login = login_str
    u.email = email
    u.set_password(password)
    u.active = True
    u.save()

    # send_activation_email.delay(u.login, generate_confirmation_token(u.login, app))
    flash('На вашу почту отправленна ссылка активации.')

    return redirect(url_for('index'))


@app.route('/activate/<confirmation_token>')
def activate_user(confirmation_token):
    user_login = confirm_token(confirmation_token, app)
    if user_login:
        user = User.get(login=user_login)
        user.active = True
        user.save()

        flash('Успешно активирован ваш аккаунт! Авторизируйтесь')
        return redirect(url_for('index'))
    else:
        abort(404)
