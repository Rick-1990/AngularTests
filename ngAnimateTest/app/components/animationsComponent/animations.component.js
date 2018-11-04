var component = ngAnimateApp.component('animationsComponent', {
    templateUrl: 'app/components/animationsComponent/animations.component.html',
    controller: [AnimationsController]
});

function AnimationsController() {
    var vm = this;
    vm.mainSwitch = false;
    vm.toggleMainSwitch = function(){
        vm.mainSwitch = !vm.mainSwitch;
    }
}

