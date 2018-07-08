from celery import Celery
from celeryconfig import broker_url, result_backend

import logging

celery_app = Celery('tasks', broker=broker_url, backend=result_backend)
logging.error(broker_url)


@celery_app.task
def hello():
    return 'hello world'
