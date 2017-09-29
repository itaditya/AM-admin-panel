angular.module('lawfactoClient').service('validateService', function () {
    this.isValid = function(form, field){
        var elem = this[form][field];
        return elem.$touched && elem.$valid;
    }
    this.isInvalid = function (form, field) {
        var elem = this[form][field];
        return elem.$touched && elem.$invalid;
    }
});
