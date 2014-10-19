/**
 * Created by Javier on 04/10/2014.
 */

angular
    .module('guide', ['ui.bootstrap', 'ui.router', 'ui.validate'])

// Configuración de las rutas
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/mainPage.html',
                controller: 'mainPageCtrl'
            })
            .state('about', {
                url:'/about',
                templateUrl: 'views/about.html',
                controller: 'ExampleController'
            })
            .state('units', {
                url:'/units',
                templateUrl: 'views/units.html'
            })
            .state('unit1', {
                url:'/units/unit1',
                templateUrl: 'views/units/unit1.html'
            })
            .state('unit2', {
                url:'/units/unit2',
                templateUrl: 'views/units/unit2.html'
            })
    }]);

angular
    .module('guide')
        .controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
}]);