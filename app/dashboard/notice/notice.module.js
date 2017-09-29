angular.module('notice', []).config(($stateProvider) => {
  $stateProvider.state('dashboard.notice.getNotice', {
    url: '/',
    component: 'getNotice'
  })
});
