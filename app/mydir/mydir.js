'use strict';

angular.module('myApp.mydir', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/mydir', {
        templateUrl: 'mydir/mydir.html'
    });
}])

.controller('mydirCtrl', ['$scope',function($scope) {
    $scope.arr=[];
    for(var i = 0;i<99;i++){
        if(i==99){
            $scope.arr.push(99);
        }else{
            $scope.arr.push(i+1);
        }
    }
    console.log($scope.arr);
}]);