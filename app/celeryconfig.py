import os

broker_url = os.environ.get('BROKER_URL', '')
result_backend = os.environ.get('CELERY_RESULT_BACKEND', 'rpc://')

