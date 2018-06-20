from flask import Flask, render_template, redirect, request, url_for
from flask_login import LoginManager, UserMixin
from db_manager import Users

app = Flask(__name__)
app.secret_key = 'secret'
lm = LoginManager()
lm.init_app(app)

if not Users.table_exists():
    Users.create_table()

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
    return render_template('auth.html')

@app.route('/authentication')
def authentication():
    return render_template('auth.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    pass


@app.route('/register', methods=['GET', 'POST'])
def register():
    if not request.method == 'POST':
        return redirect(url_for('index'))

    login = request.form['login']
    email = request.form['email']
    password = request.form['password']

    Users.create(login=login, email=email, password=password)

    return redirect(url_for('index'))


app.run(debug=True)
