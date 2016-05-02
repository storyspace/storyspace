from flask import Flask

app = Flask(
    __name__,
    static_folder='static',
    static_url_path='/assets',
    template_folder='templates'
)

app.config.from_object('config')

import storyspace.routes
