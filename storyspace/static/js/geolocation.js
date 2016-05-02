storyspaceLocation = (function(){
    storyspaceLocation = function() {
        this.coords = {
            'latitude': undefined,
            'longitude': undefined,
        };
        this.acknowledgement = false;
    };

    storyspaceLocation.prototype.retrieve = function(eventname) {
        function success(position) {
            this.coords.latitude = position.coords.latitude;
            this.coords.longitude = position.coords.longitude;

            changeLocationEvent = new CustomEvent(eventname, {'detail': this.coords});
            document.dispatchEvent(changeLocationEvent);
        };

        function error(position) {
            console.log("Could not retrieve user's geolocation");
        };

        navigator.geolocation.getCurrentPosition(success.bind(this), error);
    };

    return storyspaceLocation;
})();
