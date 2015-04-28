'use strict';

demo.controller('HomeController', function ($scope, $modal, $rootScope) {

  var home = this;
  home.scope = $scope;

  home.scope.init = function () {
    $rootScope.active_home = true;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  home.scope.init();
});