'use strict';

demo.controller('DirectiveController', function ($scope, $modal, $rootScope) {

  var directive = this;
  directive.scope = $scope;

  directive.scope.text2 = 'This is pre loaded data';
  directive.scope.checkbox2 = true;
  directive.scope.select2 = 1;
  directive.scope.radio2 = 1;
  directive.scope.names = ['John', 'Jessie'];
  directive.scope.childs = [{
    'name': 'John',
    'gender': 'Male'
  }, {
    'name': 'Jessie',
    'gender': 'Fe-Male'
  }];

  directive.scope.option_values = [{name: 'Value 1'}, {name: 'Value 2'}];

  //funtion to open css pop up
  directive.scope.showCss = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/directiveinfo.html',
      controller: 'directiveController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  directive.scope.addSelect = function (name) {
    var item = {};
    item.name = name;
    directive.scope.option_values.push(item);
    directive.scope.input_name = '';
  };

  directive.scope.addName = function (name) {

    directive.scope.names.push(name);
    directive.scope.input_name = '';
  };

  directive.scope.addNameObject = function (name, gender) {
    var item = {};
    item.name = name;
    item.gender = gender;
    directive.scope.childs.push(item);
    directive.scope.input_name1 = '';
  };

  //funtion to open css pop up
  directive.scope.showJs = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/directiveinfo.html',
      controller: 'directiveController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  directive.scope.showHtml = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/directiveinfo.html',
      controller: 'directiveController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  directive.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };
    directive.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = true;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  directive.scope.init();
});