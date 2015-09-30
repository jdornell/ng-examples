'use strict';

angular.module('controllerAsExample')

// Define Sub Controller
.controller('subController', ['$scope', function($scope) {

    var vm = this;
    vm.title = 'Sub Title';

}]);