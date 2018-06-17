from peewee import SqliteDatabase, Model, IntegerField, CharField

db = SqliteDatabase('database/users.db')

class Users(Model):
    id = IntegerField(unique=True, primary_key=True, null=False)
    login = CharField(null=False)
    email = CharField(null=False)
    password = CharField(unique=False, null=False)

    class Meta:
        database = db

