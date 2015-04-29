'use strict';

demo.controller('DirectiveController', function ($scope, $modal, $rootScope) {

  var directivecont = this;
  directivecont.scope = $scope;

  directivecont.scope.text2 = 'This is pre loaded data';
  directivecont.scope.checkbox2 = true;
  directivecont.scope.select2 = 1;
  directivecont.scope.radio2 = 1;
  directivecont.scope.names = ['John', 'Jessie'];
  directivecont.scope.childs = [{
    'name': 'John',
    'gender': 'Male'
  }, {
    'name': 'Jessie',
    'gender': 'Fe-Male'
  }];

  directivecont.scope.option_values = [{
    name: 'Value 1'
  }, {
    name: 'Value 2'
  }];

  //funtion to open css pop up
  directivecont.scope.showCss = function () {
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

  directivecont.scope.addSelect = function (name) {
    var item = {};
    item.name = name;
    directivecont.scope.option_values.push(item);
    directivecont.scope.input_name = '';
  };

  directivecont.scope.addName = function (name) {

    directivecont.scope.names.push(name);
    directivecont.scope.input_name = '';
  };

  directivecont.scope.addNameObject = function (name, gender) {
    var item = {};
    item.name = name;
    item.gender = gender;
    directivecont.scope.childs.push(item);
    directivecont.scope.input_name1 = '';
  };

  //funtion to open css pop up
  directivecont.scope.showJs = function (type) {
    var modal = {};

    var modalInstance = $modal.open({
      templateUrl: 'views/info/' + type + '.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        modal: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  directivecont.scope.showHtml = function (type) {
    var modal = {};

    var modalInstance = $modal.open({
      templateUrl: 'views/info/' + type + '.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        modal: function () {
          return modal;
        }
      }
    });
  };

  directivecont.scope.no = function () {
    $modalInstance.dismiss('cancel');
  };
  directivecont.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = true;
    $rootScope.active_form = false;
    $rootScope.active_merit = false;
  };
  directivecont.scope.init();

  directivecont.scope.ngInitFunc = function () {

    directivecont.scope.initfunct = "I have been initialized by ng-init";
  };
});