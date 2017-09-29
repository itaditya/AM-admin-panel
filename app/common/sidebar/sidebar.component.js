angular.module('common').component('sidebar', {
    templateUrl: 'app/common/sidebar/sidebar.template.html',
    controller: () => {
      $('.collapsible').collapsible();
    }
})
