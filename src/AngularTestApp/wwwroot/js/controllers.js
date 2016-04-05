(function() {
    "use strict";

    var app = angular.module("AngularTest.Controllers")
        .controller("appController", function ($scope, $rootScope) {
            $scope.model = { tabIndex: 0 }

            $rootScope.$on("setTab", function(event,value) {
                $scope.model.tabIndex = value;
            });
        })
        .controller("screen1Controller", function ($scope, $rootScope, metadata) {
            var self = this;

            this.model = {
                fields: metadata.fields,
                testData: metadata.testData
            };


            $scope.$watch(function () {
                return self.model.testData;
            },function(value) {
                metadata.testData = value;
            });

            $rootScope.$broadcast("setTab", 0);

        })
        .controller("screen2Controller", function ($scope,  $rootScope, metadata) {
            var self = this;

            this.model = {
                fields: metadata.fields,
                testData: metadata.testData
            };

            $scope.$watch(function () {
                return self.model.testData;
            }, function (value) {
                metadata.testData = value;
            });

            $rootScope.$broadcast("setTab", 1);
        });

})();