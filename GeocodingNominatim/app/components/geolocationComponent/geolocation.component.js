app.component('geolocationComponent', {
    templateUrl: 'app/components/geolocationComponent/geolocation.component.html',
    controller: ['$geolocation', '$http', GeolocationController]
});

function GeolocationController($geolocation, $http) {
    var vm = this;
    vm.positionAcquired = false;
    vm.hasHumanReadablePosition = false;


    vm.getCoords = function () {
        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function (position) {
            vm.positionAcquired = true;
            vm.position = position;
            //console.log(position);
        });
    }
    vm.getHumanReadablePosition = function () {
        if(!vm.position) throw ('ERRORE: NESSUNA POSIZIONE RILEVATA!');
        var lat = vm.position.coords.latitude;
        var lon = vm.position.coords.longitude;
        // GET Request
        $http({
            method: 'GET',
            url: 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon + '&zoom=16'
        }).then(function successCallback(response) {
            vm.humaReadablePosition = response;
            vm.hasHumanReadablePosition = true;
        }, function errorCallback(response) {
            console.log(response);
        });
    }
}