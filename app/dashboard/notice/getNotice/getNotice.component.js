angular.module('notice').component('getNotice', {
  templateUrl: 'app/dashboard/notice/getNotice/getNotice.template.html',
  controllerAs: 'vm',
  controller: function (validateService) {
    var vm = this;
    console.log('notice');
    $('select').material_select();
    $('input#autocomplete-state-input').autocomplete({
      data: {
        "Delhi": null,
        "Uttar Pradesh": null,
        "NCR": null,
        "Mumbai": null
      },
      limit: 20,
      onAutocomplete: function (val) {
        console.log(val);
      },
      minLength: 2
    });
    $('input#autocomplete-court-input').autocomplete({
      data: {
        "Delhi High Court": null,
        "Uttar Pradesh High Court": null,
        "NCR High Court": null,
        "Mumbai High Court": null
      },
      limit: 20,
      onAutocomplete: function (val) {
        console.log(val);
      },
      minLength: 2
    });
  }
})
