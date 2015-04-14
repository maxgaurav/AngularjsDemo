'use strict';

//defining the module
var demo = angular.module('demo', ['ui.router']);

//configuring the module
demo.config(function ($stateProvider, $urlRouterProvider) {

  // // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
    })
    //routes for intro
    .state('intro', {
      url: '/intro',
      templateUrl: 'views/intro.html'
    })
    //child routes
    .state('intro.basic', {
      url: '/what_is_angularjs',
      templateUrl: 'views/what_is_angularjs.html'
    })
    .state('intro.required', {
      url: '/what_you_need',
      templateUrl: 'views/what_you_need.html'
    })
    //route for working
    .state('work', {
      url: '/working_of_angluarjs',
      templateUrl: 'views/working_of_angularjs.html'
    })
    //routes for components
    .state('components', {
      url: '/components/',
      templateUrl: 'views/working_of_angularjs.html'
    })
    .state('components.module', {
      url: '/working_of_angluarjs',
      templateUrl: 'views/working_of_angularjs.html'
    })
    .state('components.controller', {
      url: '/working_of_angluarjs',
      templateUrl: 'views/working_of_angularjs.html'
    })
    .state('components.factory', {
      url: '/working_of_angluarjs',
      templateUrl: 'views/working_of_angularjs.html'
    })
    .state('components.directive', {
      url: '/working_of_angluarjs',
      templateUrl: 'views/working_of_angularjs.html'
    });
});