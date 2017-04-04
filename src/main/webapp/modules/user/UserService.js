(function() {
	'use strict';
	angular.module('app').service('UserService', UserService);

	function UserService($http) {
		this.getAll = function() {
			return $http.get("http://localhost:8080/tasks/api/users");
		};

		this.update = function(user) {
			return $http.put("http://localhost:8080/tasks/api/users", user);
		};
		
		this.add = function(user) {
            return $http.post("http://localhost:8080/tasks/api/users", user);
        };
              
        this.remove = function(id) {
			return $http.delete("http://localhost:8080/tasks/api/users/" + id);
		};
	}
})();