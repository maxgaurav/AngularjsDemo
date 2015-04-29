'use strict';

demo.controller('FormController', function ($scope, $modal, $rootScope) {

  var formcont = this;
  formcont.scope = $scope;

  formcont.scope.submitForm = function () {
    if (formcont.scope.form.$invalid) {
      alert('Invalid form');
    } else {
      var modal = {};
      modal.name = formcont.scope.name;
      modal.email = formcont.scope.email;
      modal.preffered_food = formcont.scope.prefferd_food;
      modal.cars = [{
        name: 'Audi R8-Spyder',
        value: formcont.scope.car1
      }, {
        name: 'BMW X1',
        value: formcont.scope.car2
      }, {
        name: 'Ferrari F430 Spider',
        value: formcont.scope.car3
      }];

      var modalInstance = $modal.open({
        templateUrl: 'views/info/form-submit.html',
        controller: 'ModalController',
        size: 'lg',
        resolve: {
          modal: function () {
            return modal;
          }
        }
      });
    }
  };

  //funtion to open css pop up
  formcont.scope.showCss = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/formcontinfo.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  formcont.scope.showJs = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/formcontinfo.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  //funtion to open css pop up
  formcont.scope.showHtml = function () {
    var modal = {};
    modal.showCss = true;
    modal.showJs = false;
    modal.showHtml = false;

    var modalInstance = $modal.open({
      templateUrl: 'views/info/formcontinfo.html',
      controller: 'ModalController',
      size: 'lg',
      resolve: {
        items: function () {
          return modal;
        }
      }
    });
  };

  formcont.scope.init = function () {
    $rootScope.active_home = false;
    $rootScope.active_intro = false;
    $rootScope.active_work = false;
    $rootScope.active_component = false;
    $rootScope.active_binding = false;
    $rootScope.active_directive = false;
    $rootScope.active_form = true;
    $rootScope.active_merit = false;
  };
  formcont.scope.init();
});