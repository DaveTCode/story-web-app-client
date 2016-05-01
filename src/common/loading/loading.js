class LoadingService {
  constructor($q, $mdDialog) {
    this.$q =  $q;
    this.$mdDialog = $mdDialog;
    this.loading = [];
  }
  
  load(deferred) {
    this.loading.push(deferred.promise);

    if (this.loading.length === 1) {
      this.modalInstance = this.$mdDialog.show({
        templateUrl: 'loading/loading-modal.tpl.html',
        controller: 'loadingModalController',
        controllerAs: 'loading',
        escapeToClose: false,
        clickOutsideToClose: false
      });
    }
  }
}

class LoadingModalController {
  constructor($mdDialog, $timeout, $q, loadingService) {
    $q.all(loadingService.loading)['finally'](function() {
      loadingService.loading = [];
      $mdDialog.hide();
    });
  }
}

angular.module('loading', ['ngMaterial'])
  .service('loadingService', LoadingService)
  .controller('loadingModalController', LoadingModalController);