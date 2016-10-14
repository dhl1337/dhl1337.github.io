(function () {
    'use strict';
    angular
        .module('portfolioApp')
        .controller('workController', workController);

    function workController() {

        $('.dimmable').dimmer({on: 'hover'});

    }

})();