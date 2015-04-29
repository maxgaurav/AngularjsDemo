'use strict';

//defining the module
var demo = angular.module('demo', ['ui.router', 'ui.bootstrap']);

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
      controller: 'IntroController',
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
      templateUrl: 'views/working_of_angularjs.html',
      controller: 'WorkController',
      controllerAs: 'work',
    })
    .state('work.basic', {
      url: '/normal_call',
      templateUrl: 'views/normal_call.html'
    })
    .state('work.advance', {
      url: '/angular_call',
      templateUrl: 'views/angular_call.html'
    })
    //routes for components
    .state('components', {
      url: '/components',
      templateUrl: 'views/components.html'
    })
    .state('components.home', {
      url: '/home',
      templateUrl: 'views/component_home.html'
    })
    .state('components.module', {
      url: '/module',
      templateUrl: 'views/component_module.html'
    })
    .state('components.controller', {
      url: '/controller',
      templateUrl: 'views/component_controller.html'
    })
    .state('components.factory', {
      url: '/factory',
      templateUrl: 'views/component_factory.html'
    })
    .state('components.directive', {
      url: '/directive',
      templateUrl: 'views/component_directive.html'
    })
    //routes for 
    .state('binding', {
      url: '/binding',
      controller: 'BindingController',
      controllerAs: 'binding',
      templateUrl: 'views/binding.html'
    })
    //routes for components
    .state('directive', {
      url: '/directives',
      controller: 'DirectiveController',
      controllerAs: 'directive',
      templateUrl: 'views/directives.html'
    })
    .state('directive.ng_model', {
      url: '/ng-model',
      templateUrl: 'views/directive_ng_model.html'
    })
    .state('directive.ng_init', {
      url: '/ng-init',
      templateUrl: 'views/directive_ng_init.html'
    })
    .state('directive.ng_if', {
      url: '/ng-if',
      templateUrl: 'views/directive_ng_if.html'
    })
    .state('directive.ng_show_hide', {
      url: '/ng-show-hide',
      templateUrl: 'views/directive_ng_show_hide.html'
    })
    .state('directive.ng_repeat', {
      url: '/ng-repeat',
      templateUrl: 'views/directive_ng_repeat.html'
    })
    .state('directive.ng_options', {
      url: '/ng-options',
      templateUrl: 'views/directive_ng_options.html'
    })
    .state('directive.others', {
      url: '/other-directives',
      templateUrl: 'views/directives_other.html'
    })
    //routes for forms
    .state('forms-basic', {
      url: '/forms-basic',
      controller: 'FormController',
      controllerAs: 'formcont',
      templateUrl: 'views/forms-basic.html'
    })
    .state('forms', {
      url: '/forms',
      controller: 'FormController',
      controllerAs: 'formcont',
      templateUrl: 'views/forms.html'
    })
    //routes for merits
    .state('merits', {
      url: '/merits',
      controller: 'MeritController',
      controllerAs: 'merit',
      templateUrl: 'views/merits.html'
    })
    //routes for questions
    .state('questions', {
      url: '/questions',
      templateUrl: 'views/questions.html'
    });

});

demo.run(function ($rootScope) {
  $rootScope.setQuestion = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
});