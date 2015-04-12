'use strict';

demo.controller('HomeController', function ($scope, $rootScope) {

  var home = this;
  home.scope = $scope;

  //setting default  pop up values
  home.scope.show_css = false;
  home.scope.show_js = false;
  home.scope.show_html = false;

  //funtion to open css pop up
  home.scope.showCss = function () {
    home.scope.show_css = true;
    home.scope.show_js = false;
    home.scope.show_html = false;
  };

  //funtion to open css pop up
  home.scope.showJs = function () {
    home.scope.show_css = false;
    home.scope.show_js = true;
    home.scope.show_html = false;
  };

  //funtion to open css pop up
  home.scope.showHtml = function () {
    home.scope.show_css = false;
    home.scope.show_js = false;
    home.scope.show_html = true;
  };

  //function to close all pop up
  home.scope.closePop = function () {
    home.scope.show_css = false;
    home.scope.show_js = false;
    home.scope.show_html = false;
  };


});