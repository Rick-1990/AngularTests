var ngAnimateApp = angular.module('ngAnimateApp', ['ngAnimate']);

ngAnimateApp.constant('CONST', {
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
            name: "ngAnimate",
            url: "https://docs.angularjs.org/api/ngAnimate",
            descr: "a module to animate objects based on the AngularJS classes"
        }
        
    ]
});