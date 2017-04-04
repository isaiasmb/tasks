'use strict';

angular.module('app').controller('UserController', UserController);

function UserController(UserService, $uibModal) {

	var vm = this;

	initialize();

	function initialize() {
		vm.remove = remove;
		vm.add = add;
		vm.edit = edit;
		vm.modal = {
			animation : false,
			templateUrl : 'modules/user/cad/cad-user.html',
			controller : 'CadUserController',
			controllerAs : 'CadUserCtrl',
			size : 'lg',
			resolve : {
				user : undefined
			}
		};

		loadUsers();
	}

	function loadUsers() {
		UserService.getAll().then(function(result) {
			vm.users = result.data;
		});
	}
	
	function add() {
		var m = angular.copy(vm.modal);
		var modalInstance = $uibModal.open(m);
		modalInstance.result.then(function(user) {
			UserService.add(user).then(function(user) {
				loadUsers();
				$.bootstrapGrowl('Usuário adicionado com sucesso.', {
					type : 'success',
					allow_dismiss : true
				});	
			});				
		});
	}

	function edit(user) {
		var m = angular.copy(vm.modal);
		m.resolve = {
			user : function() {
				return angular.copy(user);
			}
		}
		var modalInstance = $uibModal.open(m);

		modalInstance.result.then(function(user) {
			UserService.update(user).then(function() {
				loadUsers();
				$.bootstrapGrowl('Usuário atualizado com sucesso.', {
					type : 'success',
					allow_dismiss : true
				});
			});
		});
	}
	
	function remove(user) {
		UserService.remove(user.id).then(function() {
			loadUsers();
			$.bootstrapGrowl('Usuário excluído com sucesso.', {
				type : 'success',
				allow_dismiss : true
			});
		});
	}

}