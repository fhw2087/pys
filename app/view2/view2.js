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
        boomArr:[],
        boxSize:30*16,
        time:0,
        gameStatus:'after',
        isLose:false,
        landNum:0,
        flagNum:99
    };
    $scope.timer = null;
    $scope.initMap = function () {
        $scope.SLconfig.mapArr = [];
        for(var i = 0;i<$scope.SLconfig.boxSize;i++){
            $scope.SLconfig.mapArr.push({className:'land',num:0});
        }
        $scope.SLconfig.isLose = false;
        $scope.SLconfig.landNum = $scope.SLconfig.boxSize - $scope.SLconfig.totalsum;
        $scope.SLconfig.flagNum = $scope.SLconfig.totalsum;
    };
    $scope.initMap();
    $scope.startGame = function () {
        if($scope.SLconfig.gameStatus == 'ing'){
            if(confirm('Are you sure to restart?')){
                $scope.initMap();
            }
        }else{
            $scope.initMap();
        }
        $scope.SLconfig.boomArr = [];
        $scope.SLconfig.gameStatus = 'before';
        $scope.SLconfig.time = 0;
        $scope.timer && $interval.cancel($scope.timer);
        $scope.timer = $interval(function(){
            $scope.SLconfig.time++;
            if($scope.SLconfig.time>=999){
                $scope.SLconfig.gameStatus = 'after';
                alert('To Much Time,You Lose!');
                $interval.cancel($scope.timer);
            }
        },1000);
    };
    $scope.boomClick = function (n) {
        if($scope.SLconfig.isLose){
            alert('Click StartGame!');
            return false;
        }
        var index = this.$index;
        if(n !== undefined){
            index = n;
        }
        if($scope.SLconfig.gameStatus == 'before'){
            $scope.setBoom(index);
            $scope.boomClick(index);
            return false;
        } else if($scope.SLconfig.gameStatus == 'after'){
            alert('Click StartGame!');
            return false;
        }
        if($scope.SLconfig.mapArr[index].className == 'land'){
            var nineArr = $scope.getNineArr(index);
            var _num = 0;
            for(var i in nineArr){
                if($scope.SLconfig.mapArr[nineArr[i]].className == 'boom-dismiss' || $scope.SLconfig.mapArr[nineArr[i]].initClass == 'boom-dismiss'){
                    _num++;
                }
            }
            $scope.SLconfig.mapArr[index].num = _num;
            $scope.SLconfig.mapArr[index].className = 'num-i';
            $scope.SLconfig.landNum--;
            if($scope.SLconfig.landNum==0){
                alert('You Win!');
                return;
            }
            if(!_num){
                $scope.clickArea(nineArr);
            }
        }else if($scope.SLconfig.mapArr[index].className == 'boom-dismiss'){
            $scope.SLconfig.gameStatus = 'after';
            $interval.cancel($scope.timer);
            $scope.SLconfig.isLose = true;
            alert('You Lose!');
            for(var i in $scope.SLconfig.mapArr){
                if($scope.SLconfig.mapArr[i].className == 'boom-dismiss'){
                    $scope.SLconfig.mapArr[i].className = 'boom-i';
                }
            }
        }
    };
    $scope.boomRightClick = function () {
        if($scope.SLconfig.gameStatus == 'after'){
            alert('Click StartGame!');
            return false;
        }
        var index = this.$index;
        if($scope.SLconfig.mapArr[index].className == 'land' || $scope.SLconfig.mapArr[index].className =='boom-dismiss'){
            $scope.SLconfig.mapArr[index].initClass = $scope.SLconfig.mapArr[index].className;
            $scope.SLconfig.mapArr[index].className = 'flag';
            $scope.SLconfig.flagNum--;
        }else if($scope.SLconfig.mapArr[index].className == 'flag'){
            $scope.SLconfig.mapArr[index].className = $scope.SLconfig.mapArr[index].initClass;
            $scope.SLconfig.flagNum++;
        }else if($scope.SLconfig.mapArr[index].className == 'num-i'){
            var nineArr = $scope.getNineArr(index);
            var _num = 0;
            for(var i in nineArr){
                if($scope.SLconfig.mapArr[nineArr[i]].className == 'flag'){
                    _num++;
                }
            }
            if(this.boom.num == _num){
                $scope.clickArea(nineArr);
            }
        }
    };
    $scope.setBoom = function (index) {
        $scope.SLconfig.gameStatus = 'ing';
        var nineArr = $scope.getNineArr(index);
        nineArr.push(index);
        for(var i = 0;i < 480;i++){
            if(nineArr.indexOf(i)==-1){
                $scope.SLconfig.boomArr.push(i);
            }
        }
        for(var i = 0;i < $scope.SLconfig.totalsum;i++){
            var _random = Math.floor(Math.random()*$scope.SLconfig.boomArr.length);
            $scope.SLconfig.mapArr[$scope.SLconfig.boomArr[_random]].className = 'boom-dismiss';
            $scope.SLconfig.boomArr.splice(_random,1);
        }
    };
    $scope.getNineArr = function(n) {
        var id=[],
            id2=[];
        if(n%30>0 && n%30<29)
            id=[n-31,n-30,n-29,n-1,n+1,n+29,n+30,n+31];
        else if(n%30==0)
            id=[n-30,n-29,n+1,n+30,n+31];
        else id=[n-31,n-30,n-1,n+29,n+30];
        for(var i in id){
            if(id[i]>=0 && id[i]<$scope.SLconfig.boxSize){
                id2.push(id[i]);
            }
        }
        return id2;
    };
    $scope.clickArea = function (arr) {
        for(var i in arr){
            $scope.boomClick(arr[i]);
        }
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