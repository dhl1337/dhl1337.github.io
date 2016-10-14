(function () {
    'use strict';
    angular
        .module('portfolioApp')
        .config(['$stateProvider','$urlRouterProvider',config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '../app/components/about/aboutView.html'
            })
            .state('work', {
                url: '/work',
                templateUrl: '../app/components/work/workView.html',
                controller: 'workController'
            })
            .state('waitr', {
                url: '/waitr',
                templateUrl: '../app/components/projects/waitrView.html'
            })
            .state('forage', {
                url: '/forage',
                templateUrl: '../app/components/projects/forageView.html'
            })
            .state('favour', {
                url: '/favour',
                templateUrl: '../app/components/projects/favourView.html'
            });
        $urlRouterProvider.otherwise('/work');
    }
})();