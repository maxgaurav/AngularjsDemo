'use strict';

demo.controller('BindingController', function ($scope, $modal, $rootScope) {

  var binding = this;
  binding.scope = $scope;

  //funtion to open css pop up
  binding.scope.showCss = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/homeinfo.html',
      controller: 'HomeController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  binding.scope.showJs = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/homeinfo.html',
      controller: 'HomeController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  binding.scope.showHtml = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/homeinfo.html',
      controller: 'HomeController',
      size: 'lg',
      resolve: {
        items: function () {
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