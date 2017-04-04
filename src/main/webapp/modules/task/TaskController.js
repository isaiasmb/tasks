'use strict';

angular.module('app').controller('TaskController', TaskController);

function TaskController(TaskService, $uibModal) {

	var vm = this;

	initialize();

	function initialize() {
		vm.edit = edit;
		vm.add = add;
		vm.remove = remove;
		vm.openTask = openTask;
		vm.convertMillis = convertMillis;
		vm.completeTask = completeTask;
		vm.modal = {
			animation : false,
			templateUrl : 'modules/task/cad/cad-task.html',
			controller : 'CadTaskController',
			controllerAs : 'CadTaskCtrl',
			size : 'lg',
			resolve : {
				task : undefined
			}
		};

		vm.modalOpenTask = {
			animation : false,
			templateUrl : 'modules/task/open/open-task.html',
			controller : 'OpenTaskController',
			controllerAs : 'OpenTaskCtrl',
			windowClass : 'fixed',
			backdrop : false,
			size : 'sm',
			resolve : {
				task : undefined
			}
		};

		loadTasks();
	}

	function loadTasks() {
		TaskService.getAll().then(function(result) {
			vm.tasks = result.data;
		});
	}

	function add() {
		var m = angular.copy(vm.modal);
		m.resolve = {
			task : function() {
				return {
					effort : 0
				};
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function(task) {
			task.status = 0;
			task.elapsedTime = 0;
			TaskService.add(task).then(function() {
				loadTasks();
				$.bootstrapGrowl('Tarefa adicionada com sucesso.', {
					type : 'success',
					allow_dismiss : true
				});
			});
		});
	}

	function edit(task) {
		var m = angular.copy(vm.modal);
		m.resolve = {
			task : function() {
				return angular.copy(task);
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function(task) {
			TaskService.update(task).then(function() {
				loadTasks();
				$.bootstrapGrowl('Tarefa atualizada com sucesso.', {
					type : 'success',
					allow_dismiss : true
				});
			});
		});
	}

	function remove(task) {
		TaskService.remove(task.id).then(function() {
			loadTasks();
			$.bootstrapGrowl('Tarefa excluída com sucesso.', {
				type : 'success',
				allow_dismiss : true
			});
		});
	}

	function openTask(task) {
		var m = angular.copy(vm.modalOpenTask);
		m.resolve = {
			task : function() {
				return angular.copy(task);
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function(task) {
			console.log(task.status);
			task.status = 1;
			TaskService.update(task).then(function() {
				loadTasks();
				$.bootstrapGrowl('Tempo adicionado a tarefa', {
					type : 'success',
					allow_dismiss : true
				});
			});
		});
	}
	
	function completeTask(task) {
		task.status = 2;
		TaskService.update(task).then(function() {
			loadTasks();
			$.bootstrapGrowl('Tarefa concluída', {
				type : 'success',
				allow_dismiss : true
			});
		});
		
	}

	function convertMillis(ms) {
		var d, h, m, s;
		s = Math.floor(ms / 1000);
		m = Math.floor(s / 60);
		s = s % 60;
		h = Math.floor(m / 60);
		m = m % 60;
		d = Math.floor(h / 24);
		h = h % 24;
		return {
			d : d,
			h : h,
			m : m,
			s : s
		};
	}

}