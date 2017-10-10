angular.module('app', ['ui.router', 'common', 'dashboard']).config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/dashboard');
  $locationProvider.html5Mode(true);
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    component: 'dashboard',
  });
}).run(() => {
  console.log('module');
});
