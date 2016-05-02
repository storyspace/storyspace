from flask.views import MethodView
from flask import request, send_from_directory

from storyspace import app



class UploadsImagesView(MethodView):
    def get(self, filename):
        return send_from_directory(app.config['IMAGE_UPLOAD_PATH'], filename, as_attachment=True)
