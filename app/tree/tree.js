'use strict';

angular.module('myApp.tree', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tree', {
            templateUrl: 'tree/tree.html'
        });
    }])

    .controller('TreeCtrl', ['$scope','$http','$timeout',function($scope,$http,$timeout) {
        $scope.treeConfig = {
            treeType:'C',
            companyName:'冯浩伟的第XX家科技公司',
            changeType:{
                A:'新增事项',
                B:'减少事项',
                C:'变更事项'
            },
            totalnum: 0,
            isloading: false,
            activeYear:2016,
            activeMouth:10
        };
        $scope.treeData = [];
        $scope.navData = [];
        $http({
            url: 'tree/data.json',
            method: 'get'
        }).success(function(data){
            if(data.success){
                for(var i in data.data){
                    data.data[i].isShowDetail = true;
                    if(i>0 && data.data[i].date == data.data[i-1].date){
                        data.data[i].isSamedate = true;
                    }
                }
                $scope.treeData = $scope.treeData.concat(data.data);
                $scope.treeConfig.totalnum = data.totalnum;
            }
        });

        $http({
            url: 'tree/nav.json',
            method: 'get'
        }).success(function(data){
            if(data.success){
                $scope.navData = data.data;
            }
        });

        $scope.addMore = function(){
            this.treeConfig.isloading = true;
            $timeout(function() {
                $http({
                    url:'tree/data.json',
                    method:'get'
                }).success(function (data) {
                    if(data.success){
                        for(var i in data.data){
                            data.data[i].isShowDetail = true;
                            if(i>0 && data.data[i].date == data.data[i-1].date){
                                data.data[i].isSamedate = true;
                            }else if(i=0 && data.data[i].date == $scope.treeData[$scope.treeData.length-1].date){
                                data.data[i].isSamedate = true;
                            }
                        }
                        $scope.treeData = $scope.treeData.concat(data.data);
                    }
                    $scope.treeConfig.isloading = false;
                });
            },1000);
        };

        $scope.tiggerAllDetail = function(bol){
            for(var i in this.treeData){
                this.treeData[i].isShowDetail = bol;
            }
        };
        $scope.jump = function (n) {
            alert(n);
        };
    }]);