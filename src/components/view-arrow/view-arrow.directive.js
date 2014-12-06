'use strict';

angular.module('flowApp')
.directive('viewArrow', function () {
  return {
    restrict: 'E',
    templateUrl: '/components/view-arrow/view-arrow.directive.html'
  };
});
