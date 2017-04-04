(function () {
    'use strict';

    angular.module('app').filter('timeFilter', function () {
        return function (input) {
            if (input) {

                var elapsed = input;
                var hours = parseInt(elapsed / 3600000, 10);
                elapsed %= 3600000;
                var mins = parseInt(elapsed / 60000, 10);
                elapsed %= 60000;
                var secs = parseInt(elapsed / 1000, 10);
                var ms = elapsed % 1000;

                return hours + ':' + mins + ':' + secs;
            }
        };
    });

})();