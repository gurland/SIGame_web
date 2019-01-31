# "Своя Игра" Онлайн

UPD: Проект закрыт, оригинальный веб-клиент был доработан и теперь
полностью рабочий.

## Начало работы

Эти инструкции помогут вам запустить проект локально.

### Предварительные требования

Требуется установить [docker](https://docs.docker.com/install/) и
[docker-compose](https://docs.docker.com/compose/install/)

### Установка

Склонируйте проект

```
git clone https://github.com/gurland/SIGame_web.git

cd SIGame_web
```

Запуск осуществляется посредством docker-compose.

```
docker-compose up
```

Готово, для открытия сайта нужно зайти по адресу http://127.0.0.1

## Используемые технологии

* [Flask](http://flask.pocoo.org/) - Микрофреймворк, отвечает
за пользователей, создание комнат, загрузку пакетов
* [Flask-Login](https://flask-login.readthedocs.io) - Батарейка для Flask,
помогает управлять авторизацией пользователей
* [Peewee](http://docs.peewee-orm.com) - ORM, предоставляет данные в базе
в виде объектов
* [Aiohttp](https://aiohttp.readthedocs.io) - Асинхронный фреймворк,
отвечает за проведение игры и чат в разных докер сервисах

## Контрибуция

Используется git feature branch workflow, нужно создавать под каждый
issue отдельную ветку dev-N, где N - номер issue.

## Trello

[Sprint #1](https://trello.com/b/JLCWShJq/sigame-1) - создание систем комнат, загрузки паков, чата, аккаунтов с аватарами

## Авторы

* **Stanislav Bobokalo**  [gurland](https://github.com/gurland)
* **Alexander Semeniuk** [dvoyakiy](https://github.com/dvoyakiy)

## Лицензия

Проект лицензируется по MIT License - смотреть [LICENSE.md](https://github.com/gurland/SIGame_web/blob/master/LICENSE)
для получения деталей


