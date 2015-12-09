angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
		  templateUrl: 'views/japanese.html',
		  controller: 'JapaneseController'
		})
		.when('/Japanese', {
			templateUrl: 'views/japanese.html',
			controller: 'JapaneseController'
		})

		.when('/German', {
			templateUrl: 'views/german.html',
			controller: 'GermanController'
		})

		.when('/Portuguese', {
			templateUrl: 'views/portuguese.html',
			controller: 'PortugueseController'
		});

	$locationProvider.html5Mode(true);

}]);