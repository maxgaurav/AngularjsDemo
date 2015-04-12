'use strict';

//defining the module
var demo = angular.module('demo', ['ui.router']);

//configuring the module
demo.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
    });
});

//common running tasks
demo.run(function ($state) {
  $state.go('home');
});