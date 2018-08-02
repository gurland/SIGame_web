from peewee import Model, CharField, TextField, BooleanField, PostgresqlDatabase
from werkzeug.security import generate_password_hash, check_password_hash

db = PostgresqlDatabase('test', host='db', user='postgres', password='test', port='5432')


class BaseModel(Model):
    class Meta:
        database = db


class User(BaseModel):
    login = CharField(unique=True)
    email = CharField(unique=True)
    pw_hash = TextField()
    authenticated = BooleanField(default=False)
    active = BooleanField(default=False)

    def is_authenticated(self):
        return self.authenticated

    def is_active(self):
        return self.active

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.login

    def set_password(self, password):
        self.pw_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.pw_hash, password)


db.create_tables([User], safe=True)
