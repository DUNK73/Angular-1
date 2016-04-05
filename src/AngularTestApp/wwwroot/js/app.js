(function () {
    'use strict';

    var app = angular.module("AngularTest.App",
    [
        "AngularTest.Controllers",
        "AngularTest.Services",
        "AngularTest.Directives",

        "ui.router",
        "ngMaterial"
    ]);

    angular.module("AngularTest.Controllers", []);
    angular.module("AngularTest.Services", []);
    angular.module("AngularTest.Directives", []);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/screen1");

        $stateProvider
            .state('screen1', {
                url: "/screen1",
                templateUrl: "tpl-screen1"
            });
        $stateProvider
            .state('screen2', {
                url: "/screen2",
                templateUrl: "tpl-screen2"
            });
    });

})();