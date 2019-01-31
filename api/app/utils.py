from itsdangerous import URLSafeTimedSerializer, SignatureExpired


def generate_confirmation_token(email, app):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    return serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])


def confirm_token(token, app, expiration=3600):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

    try:
        email = serializer.loads(
                token,
                salt=app.config['SECURITY_PASSWORD_SALT'],
                max_age=expiration
            )

        return email

    except SignatureExpired:
        return
