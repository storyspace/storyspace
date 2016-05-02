from flask_wtf import Form
from wtforms import validators, StringField, DecimalField, SelectField, TextAreaField
from flask_wtf.file import FileField, FileAllowed
from werkzeug import secure_filename

from storyspace import app
from storyspace.db.models import story



class StoryForm(Form):
    categories  = StringField('Categories', [validators.InputRequired()])
    latitude    = DecimalField('Latitude', [validators.Optional(), validators.NumberRange(min=-90.0, max=90.0)])
    longitude   = DecimalField('Longitude',  [validators.Optional(), validators.NumberRange(min=-180.0, max=180.0)])

    title       = StringField('Title', [validators.InputRequired(), validators.Length(max=story.TITLE_MAX_LEN)])
    author      = StringField('Name (optional)', [validators.Optional(), validators.Length(max=story.AUTHOR_MAX_LEN)])

    content     = TextAreaField('Story', [validators.InputRequired(), validators.Length(max=story.CONTENT_MAX_LEN)])
    image       = FileField('Image File', validators=[FileAllowed(app.config['IMAGE_EXT_ALLOW'], 'Images only.')])
