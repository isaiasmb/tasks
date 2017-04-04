(function() {
	'use strict';

	angular.module('app').filter('statusString', function() {
		return function(input) {
			if (input) {

				switch (input) {	
				case 0:
					return "Pendente";
				case 1:
					return "Em Andamento";
				case 2:
					return "Concluído";								
				}
			}
		};
	});

})();