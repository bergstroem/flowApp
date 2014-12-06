'use strict';

angular.module('flowApp')
.directive('viewArrow', function () {
  return {
    restrict: 'E',
    scope: {
    	arrow: '='
    },
    templateUrl: '/components/view-arrow/view-arrow.directive.html'
  };
});
