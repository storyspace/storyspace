from flask_wtf.csrf import CsrfProtect

from storyspace import app

CsrfProtect(app)

from story import *
