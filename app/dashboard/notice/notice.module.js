angular.module('notice', []).config(function ($stateProvider) {
  $stateProvider.state('dashboard.notice.getNotice', {
    url: '/',
    component: 'getNotice'
  })
});
