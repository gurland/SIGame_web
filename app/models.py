from peewee import SqliteDatabase, Model, CharField, TextField
from werkzeug.security import generate_password_hash, check_password_hash


db = SqliteDatabase('users.db')


class BaseModel(Model):
    class Meta:
        database = db


class User(BaseModel):
    login = CharField(unique=True)
    email = CharField(unique=True)
    pw_hash = TextField()

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.pw_hash, password)


db.create_tables([User], safe=True)
