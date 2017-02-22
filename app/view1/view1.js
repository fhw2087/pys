'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.windowHeight = $(window).height()-60;
    $scope.windowWidth = $(window).width();
    $scope.active = 0;
    $scope.pictures = [{
        src:'http://ojo1st7jb.bkt.clouddn.com/1.png',
        alt:'first',
        dec:['',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'序章',
        title:'世界格局'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/2.png',
        alt:'sec',
        dec:['天堂最高战力：',
            '大天使长 艾纳利尤斯',
            '希望天使 奥利尔',
            '英勇天使 英普瑞斯',
            '命运天使 伊瑟尔',
            '智慧天使 马瑟尔',
            '正义天使 泰瑞尔'
        ],
        section:'序章',
        title:'高阶天堂势力'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/3.png',
        alt:'sec',
        dec:['地狱七魔王',
            '恐怖之王 迪亚波罗',
            '憎恨之王 墨菲斯托',
            '毁灭之王 巴尔',
            '痛苦女王 安达利尔',
            '痛苦之王 督瑞尔',
            '罪恶之王 阿兹莫丹',
            '谎言之王 彼列'
        ],
        section:'序章',
        title:'地狱势力'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/4.png',
        alt:'sec',
        dec:['第4张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'序章',
        title:'战争'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/5.png',
        alt:'sec',
        dec:['第5张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'序章',
        title:'庇护之地'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/6.png',
        alt:'sec',
        dec:['第6张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'序章',
        title:'原罪之战'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/1.png',
        alt:'first',
        dec:['',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'第一幕 陨星',
        title:'小镇预言'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/2.png',
        alt:'sec',
        dec:['天堂最高战力：',
            '大天使长 艾纳利尤斯',
            '希望天使 奥利尔',
            '英勇天使 英普瑞斯',
            '命运天使 伊瑟尔',
            '智慧天使 马瑟尔',
            '正义天使 泰瑞尔'
        ],
        section:'第一幕 陨星',
        title:'主角登场'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/3.png',
        alt:'sec',
        dec:['地狱七魔王',
            '恐怖之王 迪亚波罗',
            '憎恨之王 墨菲斯托',
            '毁灭之王 巴尔',
            '痛苦女王 安达利尔',
            '痛苦之王 督瑞尔',
            '罪恶之王 阿兹莫丹',
            '谎言之王 彼列'
        ],
        section:'第一幕 陨星',
        title:'地狱势力'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/4.png',
        alt:'sec',
        dec:['第4张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'序章',
        title:'战争'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/5.png',
        alt:'sec',
        dec:['第5张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'第一幕 陨星',
        title:'庇护之地'
    },{
        src:'http://ojo1st7jb.bkt.clouddn.com/6.png',
        alt:'sec',
        dec:['第6张描述',
            '第一张第一张描述第一张描述第一张描述描述',
            '第一张第一张描述描述',
            '第一张第一张描述第一张描述第一张描述第一张描述第一张描述描述'
        ],
        section:'第一幕 陨星',
        title:'原罪之战'
    }];
    $scope.nowMenu = $scope.pictures[$scope.active];
    $(document).off('keydown').on('keydown',function(event){
        $scope.$apply(function(){
            switch(event.keyCode){
                case 32:
                case 39:{
                    if($scope.active<$scope.pictures.length-1){
                        $scope.active++;
                        $scope.nowMenu = $scope.pictures[$scope.active];
                    }
                    break;
                }
                case 37:{
                    if($scope.active>0){
                        $scope.active--;
                        $scope.nowMenu = $scope.pictures[$scope.active];
                    }
                    break;
                }
                default:{
                    break;
                }
            }

        });
    });
}]);