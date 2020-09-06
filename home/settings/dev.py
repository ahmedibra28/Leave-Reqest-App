'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['192.168.8.250']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'LeaveRequestAPP',
        'USER': 'postgres',
        'PASSWORD': '@ahmaat19',
        'HOST': 'localhost',
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)