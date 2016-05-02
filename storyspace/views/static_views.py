from flask.views import MethodView
from flask import send_from_directory

from storyspace import app



class StaticView(MethodView):
    def get(self, filepath):
        return send_from_directory(app.static_url_path, filepath, as_attachment=True)
