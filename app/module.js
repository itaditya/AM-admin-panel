angular.module('lawfactoClient', ['ui.router', 'common', 'dashboard']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $locationProvider.html5Mode(true);
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        component: 'dashboard'
    });
}).run(() => {
    console.log('module');
});
