var angularTestsApp = angular.module('angularTests', []);

angularTestsApp.constant('appList',{
    list: [
        {
            name: "GeocodingNominatim",
            description: "Reverse geocoding with ngGeolocation and Nominatim",
            url: "/GeocodingNominatim/"
        }
    ]
});
angularTestsApp.controller("MainController", ['appList', function(appList){
    var vm = this;
    vm.list = appList.list;
}]);