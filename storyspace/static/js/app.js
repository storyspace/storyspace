$(document).ready(function() {
    var csrftoken = $('meta[name=csrf-token]').attr('content');

    $(document).foundation();

    padContainer = function() {
        $('div#app-structure-container').css('padding-top', $('div#app-topbar').outerHeight());
    };
    $(window).resize(padContainer);
    padContainer();

    mapElem = document.querySelector('div#frame-map');
    listElem = document.querySelector('div#frame-list div#story-container');

    shunts = setupShunts('div#app-frame-container');

    stories = new storyspaceStories({
        endpoint: '/api/story',
        csrftoken: csrftoken,
    });

    map = new storyspaceMap(mapElem, {
        tile_url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
        tile_options: {
            maxZoom: 15,
            id: 'tiffachoi.pbn9d7d4',
            accessToken: 'pk.eyJ1IjoidGlmZmFjaG9pIiwiYSI6ImNpbGphMGc4NTRiNmZ1dG0wMG5zMzFsMWIifQ.M8zCDPQqnFfczyJc79VMDQ'
        },
        icon_options: {
            icon_radius: 10
        },
    });

    locator = new storyspaceLocation();

    list = new storyspaceList(listElem);

    bind_interfaces(shunts, stories, map, locator, list);

    stories.get('stories-retrieved');
    $('div#location-modal').foundation('open');
});
