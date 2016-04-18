'use strict';

var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/myctrl', {
                // templateUrl: 'views/partials/myctrl.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/',
                controller: 'HomeCtrl'
            })
    }]);