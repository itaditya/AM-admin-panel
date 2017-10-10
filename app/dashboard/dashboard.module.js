angular.module('dashboard', ['notice']).config($stateProvider => {
  $stateProvider.state('dashboard.notice', {
    abstract: true,
    url: '/notice',
    template: '<ui-view/>'
  });
});
