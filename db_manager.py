from peewee import SqliteDatabase, Model, IntegerField, CharField

db = SqliteDatabase('database/users.db')


class Users(Model):
    id = IntegerField(primary_key=True, unique=True, null=False)
    login = CharField(unique=True, null=False)
    email = CharField(unique=True, null=False)
    password = CharField(unique=False, null=False)

    class Meta:
        database = db


db.create_tables([Users], safe=True)
