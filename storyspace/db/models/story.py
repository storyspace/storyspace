import datetime

from storyspace import app
from storyspace.db import db



CATEGORIES      = {
    'ethnicity':    'Ethnicity',
    'gender':       'Gender',
    'sexuality':    'Sexuality',
    'social-class': 'Social Class',
}
TITLE_MAX_LEN   = 256
AUTHOR_MAX_LEN  = 64
CONTENT_MAX_LEN = 256 * 10

class Story(db.Model):
    id          = db.Column(db.Integer, primary_key=True)

    created_on  = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    categories  = db.Column(db.String(256))
    latitude    = db.Column(db.Float)
    longitude   = db.Column(db.Float)

    title       = db.Column(db.String(256))
    author      = db.Column(db.String(64))

    content     = db.Column(db.Text)
    image_name  = db.Column(db.String(256))

    def dict_repr(self):
        return {
            'categories':       self.categories.split(','),
            'categories_text':  [CATEGORIES.get(k, k) for k in self.categories.split(',')],
            'created_on':       int((self.created_on - datetime.datetime(1970, 1, 1)).total_seconds()),
            'created_on_text':  str(self.created_on),
            'has_location':     bool((self.latitude is not None) and (self.longitude is not None)),
            'latitude':         self.latitude,
            'longitude':        self.longitude,
            'title':            self.title,
            'author':           self.author if self.author else None,
            'content':          self.content,
            'image_url':        app.config['IMAGE_UPLOAD_URL'] + '/' + self.image_name if self.image_name else None,
        }
