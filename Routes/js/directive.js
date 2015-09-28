'use strict';

angular.module('myApp')

	.config(function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider

		.when('/', {
			templateUrl: '/pages/about.html',
			controller: 'mainController'
		})
		.when('/contact', {
      		templateUrl: '/partials/contact.html', 
      		controller:  'mainController'
    	})
    	.otherwise({
    		redirectTo: '/'
    	});
	});

