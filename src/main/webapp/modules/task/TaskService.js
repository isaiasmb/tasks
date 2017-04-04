(function() {
    'use strict';
    angular.module('app').service('TaskService', TaskService);

    function TaskService($http) {
        this.getAll = function() {
            return $http.get("http://localhost:8080/tasks/api/tasks");
        };

        this.update = function(task) {
            return $http.put("http://localhost:8080/tasks/api/tasks", task);
        };

        this.add = function(task) {
            return $http.post("http://localhost:8080/tasks/api/tasks", task);
        };
              
        this.remove = function(id) {
			return $http.delete("http://localhost:8080/tasks/api/tasks/" + id);
		}
    }
})();