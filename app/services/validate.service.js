angular.module('lawfactoClient').service('validateService', () => {
  this.isValid = (form, field) => {
    const elem = this[form][field];
    return elem.$touched && elem.$valid;
  }
  this.isInvalid = (form, field) => {
    const elem = this[form][field];
    return elem.$touched && elem.$invalid;
  }
});
