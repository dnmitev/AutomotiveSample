'use strict';

var app = angular.module('myApp', ['ngRoute'])
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