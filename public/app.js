'use strict';

var app = angular.module('OvrC', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
	$routeProvider

		// Home Page
    // Home Page
		.when('/', {
			templateUrl: '/views/main/index.html',
			controller: 'mainController'
		})

		.otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
}]);
