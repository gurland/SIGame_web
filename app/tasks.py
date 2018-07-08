import smtplib
import config
from email.mime.text import MIMEText
from models import User

from celery import Celery
from celeryconfig import broker_url, result_backend

celery_app = Celery('tasks', broker=broker_url, backend=result_backend)


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
