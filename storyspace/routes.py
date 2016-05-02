from storyspace import app, api, views



# Static files
app.add_url_rule(app.static_url_path + '/<path:filepath>', view_func=views.StaticView.as_view('assets'))

# Uploads
app.add_url_rule(app.config['IMAGE_UPLOAD_URL'] + '/<path:filename>', view_func=views.UploadsImagesView.as_view('uploads_images'))

# API routes
app.add_url_rule('/api/story', view_func=api.StoryAPI.as_view('api_story'))

# Webpages
app.add_url_rule('/', view_func=views.IndexView.as_view('index'))
