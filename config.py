import secrets

# Statement for enabling the development environment
DEBUG = True

# Define the application directory
import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# Define the database - we are working with
# SQLite for this example
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'app.db')
DATABASE_CONNECT_OPTIONS = {}

# Application threads. A common general assumption is
# using 2 per available processor cores - to handle
# incoming requests using one and performing background
# operations using the other.
THREADS_PER_PAGE = 2

# Enable protection agains *Cross-site Request Forgery (CSRF)*
CSRF_ENABLED     = True

# Use a secure, unique and absolutely secret key for
# signing the data.
CSRF_SESSION_KEY = secrets.CSRF_SESSION_KEY

# Secret key for signing cookies
SECRET_KEY = secrets.SECRET_KEY

# Application
STATIC_FOLDERS = ['js', 'css', 'img']
IMAGE_UPLOAD_PATH = os.path.join(BASE_DIR, 'uploads/images')
IMAGE_UPLOAD_URL = '/uploads/images'
IMAGE_EXT_ALLOW = ['jpg', 'jpeg', 'png', 'gif']
MAX_CONTENT_LENGTH = 2 * 1024 * 1024
