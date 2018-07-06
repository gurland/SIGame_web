FROM tiangolo/uwsgi-nginx-flask:python3.6

COPY requirements.txt .
COPY ./app /app
RUN pip install --no-cache-dir -r requirements.txt
