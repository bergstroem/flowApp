'use strict';

angular.module('flowApp')
.directive('viewLayout', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/components/view-layout/view-layout.directive.html'
  };
});
