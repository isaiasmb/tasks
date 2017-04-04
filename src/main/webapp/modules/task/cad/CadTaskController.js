'use strict';

angular.module('app').controller('CadTaskController', CadTaskController);

function CadTaskController($uibModalInstance, task, UserService) {
	var vm = this;
	vm.task = task;

	initialize();

	function initialize() {
		task.effort = parseInt(task.effort / 3600000, 10);
		initializeDataUser();
	}

	function initializeDataUser() {
		UserService.getAll().then(function(result) {
			vm.users = result.data;
		});
	}

	vm.ok = function() {
		console.log(task);
		task.effort = parseInt(task.effort * 3600000, 10);
		$uibModalInstance.close(vm.task);
	};

	vm.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
};