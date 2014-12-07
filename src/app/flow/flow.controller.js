'use strict';

angular.module('flowApp')
	.controller('FlowCtrl', function($scope) {

		$scope.views = [
			{
				"label": "view1",
				"enter_probability": 1,
				"navigations": [
				{
					"action": "Link click",
					"destination": "view2",
					"probability": 0.6
				},
				{
					"action": "Button click",
					"destination": "view3",
					"probability": 0.4
				}
				]
			},
			{
				"label": "view2",
				"enter_probability": 0.6,
				"navigations": [
				]
			},
			{
				"label": "view3",
				"enter_probability": 0.4,
				"navigations": [
				]
			}
		];

	});
