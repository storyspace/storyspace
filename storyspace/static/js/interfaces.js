function bind_interfaces(shunts, stories, map, locator, list) {
    $('span#frame-toggle a#' + $(shunts.getStagedFrame()).attr('id')).addClass('selected');
    $('span#frame-toggle').click(function() {
        if (!shunts.getTransitionLock()) {
            $('span#frame-toggle a').removeClass('selected');
            frame = shunts.getStagedFrame();
            newFrameId = $(frame).attr('id') == 'frame-map' ? 'frame-list' : 'frame-map';
            $('span#frame-toggle a#' + newFrameId).addClass('selected');

            frame.dispatchEvent(new CustomEvent('shunt'));
        }

        list.masonry();
    });

    $('a.topbar-button.category').click(function(){
        category = $(this).attr('id');
        $(this).toggleClass('selected');
        stories.filterCategory(category, $(this).hasClass('selected'));
    });

    $('a.topbar-button#show-all').click(function(){
        $('a.topbar-button.category').removeClass('selected');
        stories.showAllCategories();
    });

    $('div#share-location-prompt span#yes').click(function() {
        locator.acknowledgement = true;
        locator.retrieve('location-retrieved');
    });

    $('div#share-story-modal a#share-form-submit').click(function(event) {
        event.preventDefault();

        //error detection
        if (!$("form#share-form input[name='category']:checked").length || !document.share.title.value || !document.share.content.value) {
            alert("You haven't finished your story!");
        } else {
            fd = new FormData(document.forms.share);
            fd.append('categories', $.map($("form#share-form input[name='category']:checked"), function(input) {return input.value}).join())
            stories.post(fd, 'stories-new');
            document.share.reset();
            $('div#share-story-modal').foundation('close');
        };
    });

    document.addEventListener('location-retrieved', function(event) {
        map.panzoom(14, event.detail.latitude, event.detail.longitude);
        document.share.latitude.value = event.detail.latitude;
        document.share.longitude.value = event.detail.longitude;
    });

    document.addEventListener('categories-toggled', function(event) {
        map.showStories(stories.stories, stories.categories);
        list.showStories(stories.stories, stories.categories);
        list.masonry();
    });

    document.addEventListener('stories-retrieved', function(event) {
        map.makeMarkers(stories.stories);
        list.makeCards(stories.stories, stories.categories);
        list.masonry();
    });

    document.addEventListener('stories-new', function(event) {
        map.makeMarker(event.detail);
        list.makeCard(event.detail);
        map.showStories([event.detail], stories.categories);
        list.showStories([event.detail], stories.categories);
        list.masonry();
    });
};
