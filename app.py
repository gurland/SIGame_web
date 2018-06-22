from flask import Flask, render_template, redirect, request, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from db_manager import Users

app = Flask(__name__)
app.secret_key = 'secret'
lm = LoginManager()
lm.init_app(app)


class User(UserMixin):
    pass


@lm.user_loader
def load_user(user_id):
    if user_id in Users.email or user_id in Users.login:
        user = User()
        user.id = user_id
        return user

    return None


@app.route("/")
def index():
    if current_user.is_authenticated:
        # return render_template('login.html', user_exists=users_exists)
        return 'Logged in'
    return redirect(url_for('authentication'))


@app.route('/authentication')
def authentication():
    return render_template('auth.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login = request.form['login']
    password = request.form['password']
    user = User()

    def bad_login(login, password):
        usr_db_creds = Users.get(Users.login == login or Users.email == login)  # credentials written in db
        if (login == usr_db_creds.login or login == usr_db_creds.email) and (password == usr_db_creds.password):
            user.id = login
            return False
        return True

    if bad_login(login, password):
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

    if login == Users.login or email == Users.email:
        flash('Такой пользователь уже существует')
        return render_template('auth.html')

    Users.create(login=login, email=email, password=password)

    return redirect(url_for('index'))


app.run(debug=True)
