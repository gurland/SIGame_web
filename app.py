from flask import Flask, render_template, redirect, request, url_for, flash, session
from flask_login import LoginManager, UserMixin, login_user, current_user
from models import Users

app = Flask(__name__)
app.secret_key = 'secret'
lm = LoginManager()
lm.init_app(app)


class User(UserMixin):
    pass


@lm.user_loader
def load_user(user_id):
    exist_query = Users.select().where(Users.login == user_id)
    if exist_query:
        user = User()
        user.id = user_id
        return user

    return None


@app.route("/")
def index():
    if not current_user.is_authenticated:
        return redirect(url_for('authentication'))

    return 'logged in'


@app.route('/authentication')
def authentication():
    return render_template('auth.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login_str = request.form['login']
    password = request.form['password']
    user = User()

    def bad_login(login, password):
        user_success_query = Users.select().where((Users.login == login) &
                                                  (Users.password == password))
        if user_success_query:
            user.id = login
            return False
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

    exist_query = Users.select().where(Users.login == login | Users.email == email)

    if exist_query:
        flash('Такой пользователь уже существует')
        return render_template('auth.html')

    Users.create(login=login, email=email, password=password)

    return redirect(url_for('index'))
