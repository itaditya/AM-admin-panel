angular.module('app').service('noticeService', () => {
  const notices = [];
  this.addNotice = (noticeData) => {
    notices.push(noticeData);
  }
  this.getNotice = () => notices
});
