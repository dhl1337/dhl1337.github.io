(function () {
    'use strict';
    angular
        .module('portfolioApp')
        .controller('WorkController', WorkController);

    function WorkController() {

        $('.dimmable').dimmer({on: 'hover'});

    }

})();