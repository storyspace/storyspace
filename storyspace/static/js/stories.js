storyspaceStories = (function(){
    storyspaceStories = function(options) {
        this.endpoint = options.endpoint;
        this.csrftoken = options.csrftoken;
        this.stories = [];
        this.allCategories = ['ethnicity', 'gender', 'sexuality', 'social_class'];
        this.categories = this.allCategories.slice();
    };

    storyspaceStories.prototype.filterCategory = function(category, filter) {
        i = this.categories.indexOf(category);

        if ((filter) && (i != -1)) this.categories.splice(i, 1);
        else if ((!filter) && (i == -1)) this.categories.push(category);

        this.dispatchCategoryToggleEvent();
    };

    storyspaceStories.prototype.showAllCategories = function() {
        this.categories = this.allCategories.slice();
        this.dispatchCategoryToggleEvent();
    };

    storyspaceStories.prototype.dispatchCategoryToggleEvent = function() {
        document.dispatchEvent(new CustomEvent('categories-toggled'));
    };

    storyspaceStories.prototype.get = function(eventname) {
        $.get(this.endpoint, $.proxy(function(data) {
            this.stories = data.stories;

            gotStoriesEvent = new CustomEvent(eventname);
            document.dispatchEvent(gotStoriesEvent);
        }, this), 'json');
    };

    storyspaceStories.prototype.post = function(formdata, eventname) {
        var self = this;
        var req = new XMLHttpRequest();
        req.open('POST', this.endpoint, true);
        req.responseType = 'json';

        req.onload = function(e) {
            if (req.status == 200) {
                newStoryEvent = new CustomEvent(eventname, {'detail': req.response.story});
                self.stories.push(req.response.story);
                document.dispatchEvent(newStoryEvent);
            } else {
                console.warn("Story POST failed");
                console.warn(req.response);
            }
        };

        req.setRequestHeader('X-CSRFToken', this.csrftoken);
        req.send(formdata);
    };

    return storyspaceStories;
})();
