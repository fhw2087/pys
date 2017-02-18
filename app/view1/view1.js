'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
      // $scope.name = '冯浩伟';
    $scope.resetThisinput = function(){
      $scope.name = '';
    }
    $scope.confirm = function () {
        console.log('this is my girl '+$scope.name);
    }
}]);