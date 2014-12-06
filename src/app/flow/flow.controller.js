'use strict';

angular.module('flowApp')
	.controller('FlowCtrl', function($scope) {

		$scope.views = [
		  {
		    "label": "tja",
		    "enter_probability": 1,
		    "navigations": [
		    {
		      "action": "Gå till hej",
		      "destination": "hej",
		      "probability": 1
		    }
		    ]
		  },
		  {
		    "label": "hej",
		    "enter_probability": 0,
		    "navigations": []
		  }
		  ];

	});
