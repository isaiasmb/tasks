'use strict';

angular.module('app').controller('OpenTaskController', OpenTaskController);

function OpenTaskController($uibModalInstance, task, $interval) {
	var vm = this;
	vm.task = task;
	var totalElapsedMs = 0;
	var elapsedMs = 0;
	var startTime;
	var timerPromise;
	vm.timerRunning = false;

	vm.start = function() {
		if (!timerPromise) {
			startTime = new Date();
			vm.timerRunning = true;
			timerPromise = $interval(function() {
				var now = new Date();
				elapsedMs = now.getTime() - startTime.getTime();
			}, 31);
		}
	};

	vm.stop = function() {
		if (timerPromise) {
			vm.timerRunning = false;
			$interval.cancel(timerPromise);
			timerPromise = undefined;
			totalElapsedMs += elapsedMs;
			elapsedMs = 0;
		}
		console.log(vm.getElapsedMs());
	};

	vm.getTime = function() {
		return time;
	};

	vm.getElapsedMs = function() {
		return totalElapsedMs + elapsedMs + vm.task.elapsedTime;
	};

	vm.ok = function() {
		vm.task.elapsedTime = vm.getElapsedMs();
		$uibModalInstance.close(vm.task);
	};

	vm.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

};