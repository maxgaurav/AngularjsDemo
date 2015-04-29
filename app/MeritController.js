'use strict';

demo.controller('MeritController', function ($scope, $rootScope) {

  var merit = this;
  merit.scope = $scope;

  merit.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = true;
  };
  merit.scope.init();
});