'use strict';

angular.module('flowApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .state('flow', {
        url: '/',
        templateUrl: 'app/flow/flow.html',
        controller: 'FlowCtrl'
      })
      .state('start', {
        url: '/start',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
