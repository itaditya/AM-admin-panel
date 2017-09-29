angular.module('common').component('navbar', {
  templateUrl: 'app/common/navbar/navbar.template.html',
  controller: function () {
    console.log('navbar');
    $(".sidebar-collapse").sideNav({
      menuWidth: 250
    });
  }
})
