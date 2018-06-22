from flask import Flask, render_template, redirect, request, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, current_user
from peewee import DoesNotExist

from models import User

app = Flask(__name__)
app.secret_key = 'secret'
lm = LoginManager()
lm.init_app(app)


@lm.user_loader
def load_user(user_id):
    exist_query = User.select().where(User.login == user_id)
    if exist_query:
        user = UserMixin()
        user.id = user_id
        return user

    return None


@app.route("/")
def index():
    if not current_user.is_authenticated:
        return redirect(url_for('authentication'))

    return 'logged in'

@app.route('/game')
def game_page():
    return render_template('game.html')

@app.route('/authentication')
def authentication():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    return render_template('auth.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login_str = request.form['login']
    password = request.form['password']
    user = UserMixin()

    def bad_login(login, password):
        try:
            user_model = User.get(login == login)
            if user_model.check_password(password):
                user.id = login
                return False

        except DoesNotExist:
            return True

        return True

    if bad_login(login_str, password):
        flash('Неправильный логин и/или пароль')
        return redirect(url_for('index'))

    login_user(user)
    return redirect(url_for('index'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login = request.form['login']
    email = request.form['email']
    password = request.form['password']

    exist_query = User.select().where(User.login == login | User.email == email)

    if exist_query:
        flash('Такой пользователь уже существует')
        return render_template('auth.html')

    u = User()
    u.login = login
    u.email = email
    u.set_password(password)
    u.save()

    return redirect(url_for('index'))
