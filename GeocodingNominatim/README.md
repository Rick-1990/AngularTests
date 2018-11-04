# Geocoding with AngularJS, ngGeolocation and Nominatim
This project relies on:

- [Bootstrap](https://getbootstrap.com/), the de-facto standard styling framework
- [AngularJS](https://angularjs.org/), MVW framework to create dynamic apps
- [ngGeolocation](https://github.com/ninjatronic/ngGeolocation), a wrapper of the HTML5 geolocation functions in AngularJS
- [Nominatim](https://nominatim.openstreetmap.org/), a search engine for OpenStreetMap data, used to do reverse geocoding here
- [OpenStreetMap](https://www.openstreetmap.org/), a collaborative project that aims to build a free editable map of the world

I focused on the Nominatim API because it is open source and can be installed on a server, be it personal or on an enterprise server farm, so you don't have to pay for services like the Google Geolocation API or others, even for large amounts of requests.

# 
## Prerequisites
This project runs with NodeJs, which has to be installed on your machine, or you have to start a webserver of your choice pointing to this directory as the wwwroot.
## Running
Clone this repo:
```
git clone https://github.com/Rick-1990/AngularTests/
```
Get into the project folder
```
cd GeocodingNominatim
```
Run with npm
```
npm start
```
Select "GeocodingNominatim" from the list to view this demo
# License
This repository is licensed under the terms of the GNU GPLv3 license. You may read the full terms in the [LICENSE file](../LICENSE)