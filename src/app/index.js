'use strict';

angular.module('flowApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('flow', {
        url: '/',
        templateUrl: 'app/flow/flow.html',
        controller: 'FlowCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
