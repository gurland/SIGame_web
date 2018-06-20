from flask import Flask, render_template
from db_manager import Users

app = Flask(__name__)


if not Users.table_exists():
    Users.create_table()


@app.route("/")
def index():
    return render_template('auth.html')



