all = ['db']

from flask_sqlalchemy import SQLAlchemy

from storyspace import app

db = SQLAlchemy(app)

import models

db.create_all()
