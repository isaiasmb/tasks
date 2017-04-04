'use strict';

angular.module('app').controller('CadUserController', CadUserController);

function CadUserController($uibModalInstance, user) {
	var vm = this;
	vm.user = user;

	vm.ok = function() {
		$uibModalInstance.close(vm.user);
	};

	vm.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
};