storyspaceList = (function(){
    storyspaceList = function(listElem) {
        this.listElem = $(listElem);

        this.card_template = $('#template-listed-story').html();
        Mustache.parse(this.card_template);

        this.listElem.masonry({
            itemSelector: '.listed-story-wrapper',
            percentPosition: true,
        });
    };

    storyspaceList.prototype.makeCards = function(stories) {
        stories.sort(function(a, b) {
            if (a.created_on > b.created_on) return -1;
            if (a.created_on < b.created_on) return 1;
            return 0;
        });

        for (i in stories) this.makeCard(stories[i]);
    };

    storyspaceList.prototype.makeCard = function(story, beforeDOM) {
        story.created_on_text = timestamp_text(story.created_on);
        card = story.cardElem = $(Mustache.render(this.card_template, story));
        $('div.story-icon', card).html(make_story_icon(10, story.categories));
        if (beforeDOM) { this.listElem.prepend(card).masonry('prepended', card); }
        else { this.listElem.append(card).masonry('appended', card); }
    };

    storyspaceList.prototype.showStories = function(stories, categories) {
        for (i in stories) {
            story = stories[i];

            show = false;

            for (i = 0; (!show && (i < story.categories.length)); ++i)
                for (j = 0; j < categories.length; ++j)
                    if (story.categories[i] == categories[j]) {
                        show = true;
                        break;
                    }

            if (show) {
                story.cardElem.show();
            } else {
                story.cardElem.hide();
            }
        }
    };

    storyspaceList.prototype.masonry = function() {
        var self = this;

        this.listElem.imagesLoaded().progress(function() {
            self.listElem.masonry('layout');
        });

        this.listElem.masonry('layout');
    };

    return storyspaceList;
})();

timestamp_text = function(timestamp) {
    date = new Date(timestamp * 1000);

    year        = date.getFullYear();
    month       = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][date.getMonth()];
    day         = date.getDate();

    return month + ' ' + day + ', ' + year
};
