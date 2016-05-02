from flask.views import MethodView
from flask import request, render_template

from storyspace import app



class IndexView(MethodView):
    def get(self):
        return render_template('index.html'), 200
