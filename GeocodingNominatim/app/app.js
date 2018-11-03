var app = angular.module('geocodingNominatim', ['ngGeolocation']);

app.constant('CONST', {
    const: [
        {
            name: "Bootstrap",
            url: "https://getbootstrap.com/",
            descr: "the de-facto standard styling framework"
        },
        {
            name: "AngularJS",
            url: "https://angularjs.org/",
            descr: "MVW framework to create dynamic apps"
        },
        {
            name: "ngGeolocation",
            url: "https://github.com/ninjatronic/ngGeolocation",
            descr: "a wrapper of the HTML5 geolocation functions in AngularJS"
        },
        {
            name: "Nominatim",
            url: "https://nominatim.openstreetmap.org/",
            descr: "a search engine for OpenStreetMap data, used to do reverse geocoding here"
        },
        {
            name: "OpenStreetMap",
            url: "https://www.openstreetmap.org/",
            descr: "a collaborative project that aims to build a free editable map of the world"
        }
    ]
});