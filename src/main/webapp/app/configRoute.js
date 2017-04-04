(function() {
	'use strict';
	angular.module('app').config(ConfigRoute);

	function ConfigRoute($routeProvider) {

		$routeProvider.when('/users', {
			templateUrl : "modules/user/users.html",
			controller : "UserController",
			controllerAs : "UserCtrl"
		});

		$routeProvider.when('/tasks', {
			templateUrl : "modules/task/tasks.html",
			controller : "TaskController",
			controllerAs : "TaskCtrl"
		});

		$routeProvider.otherwise({
			redirectTo : "/users"
		});
	}

})();