from flask.views import MethodView
from flask import request
from werkzeug import secure_filename
import os
import json
import binascii

from storyspace import app
from storyspace.api.forms import StoryForm
from storyspace.db import db
from storyspace.db.models import Story



class StoryAPI(MethodView):
    def post(self):
        form = StoryForm()

        if form.validate_on_submit():
            filename = None

            if form.image.data:
                filename = binascii.b2a_hex(os.urandom(6)) + '_' + secure_filename(form.image.data.filename)
                form.image.data.save(os.path.join(app.config['IMAGE_UPLOAD_PATH'], filename))

            story = Story(
                categories  = form.categories.data,
                latitude    = form.latitude.data,
                longitude   = form.longitude.data,
                title       = form.title.data,
                author      = form.author.data,
                content     = form.content.data,
                image_name  = filename,
            )

            db.session.add(story)
            db.session.commit()

            return json.dumps({'success': True, 'story': story.dict_repr()}), 200

        return json.dumps({'success': False, 'errors': form.errors}), 400

    def get(self):
        result_set = {'stories': [story.dict_repr() for story in Story.query.all()]}

        return json.dumps(result_set), 200
