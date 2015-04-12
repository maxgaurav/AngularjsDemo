'use strict';

var demo = angular.module('demo', ['ui.router']);

demo.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    });
});

demo.run(function ($state) {
  $state.go('home');
});