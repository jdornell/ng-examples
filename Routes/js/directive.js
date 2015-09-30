angular.module('routeExample')

	.config(function($routeProvider) {

		$routeProvider

		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'pages/page-1.html',
			controller: 'mainController'
		})
		.when('/contact', {
      		templateUrl: 'pages/page-2.html', 
      		controller:  'mainController'
    	})
    	.otherwise({
    		redirectTo: '/'
    	});
	});

