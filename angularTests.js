var angularTestsApp = angular.module('angularTests', []);

angularTestsApp.constant('appList',{
    list: [
        {
            name: "GeocodingNominatim",
            description: "Reverse geocoding with ngGeolocation and Nominatim",
            url: "/GeocodingNominatim/"
        },
        {
            name: "ngAnimateTest",
            description: "Several ngAnimate tests with every component that came to my mind",
            url: "/ngAnimateTest/"
        }
    ]
});
angularTestsApp.controller("MainController", ['appList', function(appList){
    var vm = this;
    vm.list = appList.list;
}]);