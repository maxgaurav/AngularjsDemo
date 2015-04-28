'use strict';

demo.controller('WorkController', function ($scope, $rootScope) {
  var work = this;
  work.scope = $scope;

  work.first_action = false;
  work.second_action = false;
  work.third_action = false;
  work.fourth_action = false;
  work.first_response = false;
  work.second_response = false;

  work.play_round = 0;

  work.scope.set_pre = function () {
    work.scope.basic = true;
  };

  work.scope.set_next = function () {
    work.scope.basic = false;
  };

  work.play = function () {

    if (work.play_round === 0) {
      work.first_action = true;
      work.play_round = 1;

    } else if (work.play_round === 1) {
      work.second_action = true;
      work.play_round = 2;

    } else if (work.play_round === 2) {
      work.first_response = true;
      work.play_round = 3;

    } else if (work.play_round === 3) {
      work.third_action = true;
      work.play_round = 4;

    } else if (work.play_round === 4) {
      work.fourth_action = true;
      work.play_round = 5;

    } else if (work.play_round === 5) {
      work.second_response = true;
      work.play_round = 6;

    } else if (work.play_round === 6) {
      work.play_round = 0;
      work.first_action = false;
      work.second_action = false;
      work.third_action = false;
      work.fourth_action = false;
      work.first_response = false;
      work.second_response = false;
    }
  };

    work.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = true;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  work.scope.init();

});