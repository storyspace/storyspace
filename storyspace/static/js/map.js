storyspaceMap = (function(){
    storyspaceMap = function(map_target, options) {
        var self = this;

        bounds = new L.latLngBounds([[90, 180], [-90, -180]]);

        this.map = L.map(map_target, {
            zoomControl: false,
            maxBounds: bounds,
            minZoom: 2,
        }).setView([30, 0], 2).on('drag', function() {
            self.map.panInsideBounds(bounds, {animate: false});
        });;

        L.tileLayer(options.tile_url, options.tile_options).addTo(this.map);

        new L.Control.Zoom({
            position: 'bottomleft'
        }).addTo(this.map);

        this.icon_radius = options.icon_options.icon_radius;
        this.icons = {};

        this.marker_template = $('#template-map-marker-story').html();
        Mustache.parse(this.marker_template);
    };

    storyspaceMap.prototype.panzoom = function(zoom, latitude, longitude) {
        this.map.setZoom(zoom);
        this.map.panTo([latitude, longitude]);
    };

    storyspaceMap.prototype.icon = function(categories) {
        categories.sort();
        hash = categories.join();

        if (this.icons.hasOwnProperty(hash)) {
            return this.icons[hash];
        } else {
            return (this.icons[hash] = L.divIcon({
                iconSize: [this.icon_radius * 2, this.icon_radius * 2],
                html: make_story_icon(this.icon_radius, categories),
            }));
        }
    };

    storyspaceMap.prototype.makeMarkers = function(stories) {
        for (i in stories) this.makeMarker(stories[i]);
    };

    storyspaceMap.prototype.makeMarker = function(story) {
        var self = this;

        if (!story.has_location) return;

        story.marker = L.marker([story.latitude, story.longitude], {
            icon: self.icon(story.categories),
            opacity: 1
        }).bindPopup(
            Mustache.render(this.marker_template, story)
        ).addTo(this.map);
    };

    storyspaceMap.prototype.showStories = function(stories, categories) {
        for (i in stories) {
            story = stories[i];
            if (!story.has_location) continue;

            show = false;
            
            for (i = 0; (!show && (i < story.categories.length)); ++i)
                for (j = 0; j < categories.length; ++j)
                    if (story.categories[i] == categories[j]) {
                        show = true;
                        break;
                    }

            if (show) {
                story.marker.setOpacity(1.0);
                story.marker.clickable = true;
            } else {
                story.marker.setOpacity(0.0);
                story.marker.clickable = false;
            }
        }
    };

    return storyspaceMap;
})();
