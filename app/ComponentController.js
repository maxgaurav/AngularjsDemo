'use strict';

demo.controller('ComponentController', function ($scope, $modal, notify) {

  var home = this;
  home.scope = $scope;

  //funtion to open css pop up
  home.scope.showCss = function () {
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
  home.scope.showJs = function () {
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
  home.scope.showHtml = function () {
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

  home.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };

  home.scope.callNotify = function (msg) {
    notify(msg);
  };
});

demo.factory('notify',  function ($window) {
  var msgs = [];
  return function (msg) {
    msgs.push(msg);
    if (msgs.length === 3) {
      $window.alert(msgs.join("\n"));
      msgs = [];
    }
  };
});