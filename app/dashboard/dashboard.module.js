angular.module('dashboard', ['notice']).config(function ($stateProvider) {
  $stateProvider.state('dashboard.notice', {
    abstract: true,
    url: '/notice',
    template: '<ui-view/>'
  });
});
