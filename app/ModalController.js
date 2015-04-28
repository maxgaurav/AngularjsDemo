'use strict';

demo.controller('ModalController', function ($scope, $modalInstance, modal) {
  var modalcnt = this;
  modalcnt.scope =  $scope;
  modalcnt.scope.modal = modal;

  modalcnt.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };
});