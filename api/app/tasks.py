import os.path
import smtplib
import config
from zipfile import ZipFile
from email.mime.text import MIMEText

from models import User, Package, UserPackage
from game_package import GamePackage

from celery import Celery
from celeryconfig import broker_url, result_backend
from pymongo import MongoClient

celery_app = Celery('tasks', broker=broker_url, backend=result_backend)
mongo_client = MongoClient('mongo', 27017, username='root', password='test')


@celery_app.task
def send_activation_email(user_login, confirmation_token):
    user = User.get(login=user_login)
    token_path = '/activate/' + confirmation_token

    subject = 'Активация аккаунта в SI Online'
    msg_content = 'Перейдите по следующей ссылке, чтобы активировать ваш аккаунт: ' \
                  f'{config.CURRENT_WEBSITE + token_path}'

    message = MIMEText(msg_content)
    message['Subject'] = subject
    message['To'] = f'{user.email}'

    with smtplib.SMTP(config.SMTP_HOST, config.SMTP_PORT) as server:
        server.starttls()
        server.login(config.SMTP_LOGIN, config.SMTP_PASSWORD)
        server.sendmail(config.SMTP_EMAIL,
                        user.email,
                        message.as_string())


@celery_app.task(bind=True)
def add_package(self, siq_path, user_id):
    db = mongo_client.test
    packages = db.packages

    user = User.get(id=user_id)

    with ZipFile(siq_path) as siq:
        # Broken zip check
        if siq.testzip():
            self.update_state(state='CORRUPTED')
            return

        siq_structure = siq.namelist()
        # Siq structure check
        if 'content.xml' not in siq_structure:
            self.update_state(state='BAD_STRUCTURE')
            return

        # Read content.xml bytes
        package_xml = siq.read('content.xml')
        package = GamePackage(package_xml)

        # Check gamepack existence in MongoDB
        if packages.find_one({'_id': package.id}):
            package_model, status = Package.get_or_create(id=package.id)
            UserPackage.create(user=user, package=package_model)
            os.remove(siq_path)
            return

        media_package_path = os.path.join(config.MEDIA_FOLDER, package.id)

        # Extract only media folders
        allowed_members = [x for x in siq_structure if x.startswith(('Images/', 'Audio/', 'Video/'))]
        siq.extractall(media_package_path, allowed_members)

    os.remove(siq_path)

    inserted_id = packages.insert_one(package.to_dict()).inserted_id

    package_model, status = Package.get_or_create(id=inserted_id)
    return package_model.id
