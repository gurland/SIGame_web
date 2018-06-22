from peewee import SqliteDatabase, Model, CharField

db = SqliteDatabase('users.db')


class Users(Model):
    login = CharField(unique=True, null=False)
    email = CharField(unique=True, null=False)
    password = CharField(unique=False, null=False)

    class Meta:
        database = db


db.create_tables([Users], safe=True)
