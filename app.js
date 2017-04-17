(function () {
    angular.module('westwoodna', [
        'ui.router',
        'events.controller',
        'home.controller',
        'about.controller',
        'membership.controller'
    ]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: './pages/home.html',
            controller: 'homeController as _self'
        }).state('events', {
            url: '/events',
            templateUrl: './pages/events.html',
            controller: 'eventsController as _self'
        }).state('about', {
            url: '/about',
            templateUrl: './pages/about.html',
            controller: 'aboutController as _self'
        }).state('membership', {
            url: '/membership',
            templateUrl: './pages/membership.html',
            controller: 'membershipController as _self'
        });
    }]);
})()