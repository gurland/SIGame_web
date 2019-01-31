FROM python:3.6

WORKDIR /app/
COPY . .
RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["uwsgi", "--ini", "uwsgi.ini"]