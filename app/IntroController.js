'use strict';

demo.controller('IntroController', function ($scope, $modal, $rootScope, $state) {
  var intro = this;
  intro.scope = $scope;
  //funtion to open css pop up
  intro.scope.showCss = function () {
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
  intro.scope.showJs = function () {
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
  intro.scope.showHtml = function () {
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

  intro.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = true;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  intro.scope.init();
});