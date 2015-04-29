'use strict';

demo.controller('ComponentController', function ($scope, $modal, notify, $rootScope) {

  var component = this;
  component.scope = $scope;

  //funtion to open css pop up
  component.scope.showJs = function (type) {
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

  //funtion to open css pop up
  component.scope.showHtml = function (type) {
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

  component.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };

  component.scope.callNotify = function (msg) {
    notify(msg);
  };

  component.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = true;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  component.scope.init();
});

demo.factory('notify', function ($window) {
  var msgs = [];
  return function (msg) {
    msgs.push(msg);
    if (msgs.length === 3) {
      $window.alert(msgs.join("\n"));
      msgs = [];
    }
  };
});

demo.directive('test', function () {
  return {
    restrict: 'A',
    templateUrl: 'views/test.html'
  };
});