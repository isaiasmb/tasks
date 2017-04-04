(function() {
	'use strict';

	angular.module('app').directive('confirmClick', function() {
		return {
			link : function(scope, element, attr) {
				var msg = attr.confirmClick || "Tem certeza?";
				var clickAction = attr.confirmedClick;
				element.bind('click', function(event) {
					if (window.confirm(msg)) {
						scope.$eval(clickAction)
					}
				});
			}
		};
	});

})();