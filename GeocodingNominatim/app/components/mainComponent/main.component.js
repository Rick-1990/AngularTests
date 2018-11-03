app.component('mainComponent', {
    templateUrl: 'app/components/mainComponent/main.component.html',
    controller: ['CONST', MainController]
});

function MainController(CONST) {
    var vm = this;
    vm.const = CONST.const;
}