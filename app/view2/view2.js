'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$interval',function($scope,$interval) {
    $scope.SLconfig = {
        totalsum:99,
        mapArr:[],
        initArr:[],
        boomArr:[],
        boxSize:30*16,
        time:0,
        gameStatus:'after'
    };
    $scope.timer = null;
    for(var i = 0;i<$scope.SLconfig.boxSize;i++){
        $scope.SLconfig.mapArr.push({className:'land',num:0});
    }
    $scope.SLconfig.initArr = $scope.SLconfig.mapArr;
    $scope.startGame = function () {
        $scope.SLconfig.gameStatus = 'before';
        $scope.SLconfig.time = 0;
        $scope.timer && $interval.cancel($scope.timer);
        $scope.timer = $interval(function(){
            $scope.SLconfig.time++;
            if($scope.SLconfig.time>=999){
                $scope.SLconfig.gameStatus = 'after';
                $interval.cancel($scope.timer);
            }
        },1000);
    };
    $scope.boomClick = function (n) {
        var index = this.$index || n || 0;
        if($scope.SLconfig.gameStatus == 'before'){
            $scope.setBoom(index);
            $scope.boomClick(index);
            return false;
        } else if($scope.SLconfig.gameStatus == 'after'){
            alert('Click StartGame!');
            return false;
        }
        if($scope.SLconfig.mapArr[index].className == 'land'){
            $scope.SLconfig.mapArr[index].className = 'num-i';
        }else if($scope.SLconfig.mapArr[index].className == 'boom-dismiss'){
            $scope.SLconfig.gameStatus = 'after';
            $interval.cancel($scope.timer);
            alert('You Lose!');
        }

    };
    $scope.boomRightClick = function () {
        if($scope.SLconfig.gameStatus == 'after'){
            alert('Click StartGame!');
            return false;
        }
        var index = this.$index;
        if($scope.SLconfig.mapArr[index].className == 'land'){
            $scope.SLconfig.mapArr[index].className = 'flag';
        }else if($scope.SLconfig.mapArr[index].className == 'flag'){
            $scope.SLconfig.mapArr[index].className = 'land';
        }else if($scope.SLconfig.mapArr[index].className == 'num-i'){

        }
    };
    $scope.setBoom = function (index) {
        $scope.SLconfig.gameStatus = 'ing';
        var nineArr = $scope.getNineArr(index);

    };
    $scope.getNineArr = function(n) {
        var id=[];
        if(n%30>0 && n%30<29)
            id=[n-31,n-30,n-29,n-1,n+1,n+29,n+30,n+31];
        else if(n%30==0)
            id=[n-30,n-29,n+1,n+30,n+31];
        else id=[n-31,n-30,n-1,n+29,n+30];
        return id;
    };
}]).directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});