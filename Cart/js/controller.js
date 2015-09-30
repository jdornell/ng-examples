'use strict';

angular.module('cartExample')

// Define Angular controller
.controller('mainController', ['$scope', function($scope) {

    //$scope.message = 'message';

    $scope.items = [
    		{
    			'name': 'item 1',
    			'type': 'type 1'
    		},
    		{
    			'name': 'item 2',
    			'type': 'type 2'
    		},
    		{
    			'name': 'item 3',
    			'type': 'type 3'
    		}
    ];

    $scope.addItem = function() {
    	$scope.items.push($scope.item);
    	$scope.item = '';
    };

    $scope.removeItem = function(item) {
    	$scope.items.splice($scope.items.indexOf(item), 1);
    };

}]);