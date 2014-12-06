'use strict';

angular.module('flowApp').controller('MainCtrl', function () {
  var vm = this;

  vm.views = [
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

  return vm;
});
