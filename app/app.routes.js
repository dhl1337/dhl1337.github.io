(function () {
    'use strict';
    angular
        .module('portfolioApp')
        .config(['$stateProvider','$urlRouterProvider',config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '../app/components/about/about.html'
            })
            .state('work', {
                url: '/work',
                templateUrl: '../app/components/work/work.html',
                controller: 'WorkController'
            })
            .state('waitr', {
                url: '/waitr',
                templateUrl: '../app/components/projects/waitr.html'
            })
            .state('forage', {
                url: '/forage',
                templateUrl: '../app/components/projects/forage.html'
            })
            .state('favour', {
                url: '/favour',
                templateUrl: '../app/components/projects/favour.html'
            });
        $urlRouterProvider.otherwise('/work');
    }
})();