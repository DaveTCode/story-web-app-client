class ErrorService {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }
  
  showError(error) {
    this.$mdDialog.show({
      parent: angular.element(document.body),
      templateUrl: 'errorService/error.tpl.html',
      controller: 'errorController',
      controllerAs: 'err',
      escapeToClose: false,
      clickOutsideToClose: false,
      locals: {
        error: error
      }
    });
  }
}

class ErrorController {
  constructor($window, $mdDialog, error) {
    this.$window = $window;
    this.$mdDialog = $mdDialog;
    this.error = error;
  }
  
  refresh() {
    this.$window.location.reload();
  }
}

angular.module('errors', ['ngMaterial'])
  .service('errorService', ErrorService)
  .controller('errorController', ErrorController);