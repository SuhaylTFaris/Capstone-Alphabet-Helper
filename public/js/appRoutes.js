angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/Japanese', {
			templateUrl: 'views/Japanese.html',
			controller: 'JapaneseController'
		})

		.when('/German', {
			templateUrl: 'views/German.html',
			controller: 'GermanController'
		})

		.when('/Portuguese', {
			templateUrl: 'views/Portuguese.html',
			controller: 'PortugueseController'
		});

	$locationProvider.html5Mode(true);

}]);