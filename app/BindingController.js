'use strict';

demo.controller('BindingController', function ($scope, $modal, $rootScope) {

  var binding = this;
  binding.scope = $scope;

  //funtion to open css pop up
  binding.scope.showHtml = function (type) {
    var modal = {};

    var modalInstance = $modal.open({
      templateUrl: 'views/info/' + type + '.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        modal: function () {
          return modal;
        }
      }
    });
  };

  binding.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };

  binding.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = true;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
  };
  binding.scope.init();
});