angular.module('lawfactoClient').service('noticeService', function () {
    var notices = [];
    this.addNotice = function(noticeData){
        notices.push(noticeData);
    }
    this.getNotice = function(){
        return notices;
    }
});
