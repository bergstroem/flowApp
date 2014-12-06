'use strict';

angular.module('flowApp')
.directive('viewBox', function () {
  return {
    restrict: 'E',
    scope: {
    	view: '='
    },
    templateUrl: '/components/view-box/view-box.directive.html'
  };
});
