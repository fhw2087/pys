'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl'
    });
}])

.controller('View3Ctrl', ['$scope','$interval',function($scope,$interval) {
    $scope.windowHeight = $(window).height()-60;
    $scope.windowWidth = $(window).width();
    $scope.active = 0;
    $scope.pictures = [{
        img1:{
            src:'../images/ppt/shouye.png',
            style:'right:0',
            show:true
        },
        img2:{
            src:'../images/ppt/wenhao.jpg',
            style:'bottom:0;left:0',
            show:false
        },
        dec:['关于体育比赛的赛制你了解多少？',
            '你知道哪些流行的赛制...',
            '你知道哪些奇葩的赛制...'
        ],
        section:'序章',
        title:'',
        dec2:{
            dec:'赛制对于一项比赛具有很重要的意义。好的赛制能够让比赛打的更精彩，观众也看的过瘾，而一个失败的赛制很容易造成参赛者无聊玩默契。\n\r' +
                '赛制的好坏是相对的，没有最好的赛制，也没有垃圾的赛制，只有最适合当前比赛的赛制。任何赛制都有自己的优点和局限性',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/og17.png',
            style:'left:0',
            show:true
        },
        img2:{
            src:'../images/ppt/og.png',
            style:'bottom:0;right:0',
            show:false
        },
        dec:['循环赛（小组赛、常规赛）：',
            '----单循环',
            '----双循环',
            '----四循环',
            '淘汰赛（季后赛）',
            '----单败淘汰',
            '----双败淘汰',
            '----交叉淘汰',
            '----冒泡赛',
            '----复活赛',
            '----佩寄赛',
            '......'
        ],
        section:'常见赛制汇总',
        title:'',
        dec2:{
            dec:'几种赛制有可能糅合在一起组成一些更复杂的赛制\n\r' +
            '当然，目的都是为了让比赛更具观赏性，最合适的赛制组合可以让整个比赛全程无尿点',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/shijiebei.png',
            style:'left:0',
            show:true
        },
        img2:{
            src:'../images/ppt/suchao.png',
            style:'bottom:0;right:0',
            show:false
        },
        dec:['单循环',
            '----奥运会世界杯的篮球足球小组赛',
            '双循环',
            '----足球篮球赛的联赛',
            '四循环',
            '----NBA的部分场次',
            '奇葩的三循环',
            '----苏格兰超级联赛',
            '。。。。。。'
        ],
        section:'循环赛（小组赛、常规赛）',
        title:'',
        dec2:{
            dec:'循环赛的目的一般是为了决出晋级下一阶段的参数者\n\r' +
            '一些赛程跨度超长的项目会直接通过循环赛决出冠军，比如足球联赛。' +
            '循环赛通常具有一些弊端。',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/ti6ch.png',
            style:'right:0',
            show:true
        },
        img2:{
            src:'../images/ppt/430.png',
            style:'bottom:0;left:0',
            show:false
        },
        dec:['一些特殊的预选赛赛制'
        ],
        section:'小组赛',
        title:'',
        dec2:{
            dec:'这场特殊赛制的比赛，让实力强劲的几只队伍在小组赛就拼的你死我活，而不仅仅是安于一个淘汰赛的名额\n\r',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/nba.png',
            style:'left:0',
            show:true
        },
        img2:{
            src:'../images/ppt/yyf.png',
            style:'bottom:0;right:0',
            show:false
        },
        dec:['单败淘汰',
            '----世界上大部分的体育赛',
            '双败淘汰',
            '----大部分的电竞比赛',
            '交叉淘汰',
            '----应用于几乎所有淘汰赛',
        ],
        section:'淘汰赛',
        title:'',
        dec2:{
            dec:'单败淘汰适应于消耗比较大的赛制\n\r' +
            '双败淘汰适应于消耗不大的电竞赛事，参赛者失败两次才会被淘汰，但败者组的比赛比单败淘汰都显得残酷。' +
            '交叉淘汰是为了增加小组赛的竞争。',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/maopao.png',
            style:'left:0',
            show:true
        },
        img2:{
            src:'../images/ppt/nb.png',
            style:'bottom:0;right:0',
            show:false
        },
        dec:['类似于冒泡排序',
            '从池子底下冒起来真的很不容易'
        ],
        section:'淘汰赛',
        title:'冒泡赛',
        dec2:{
            dec:'冒泡赛同样是保护小组赛的高排名，以增强小组赛竞争性。\n\r' +
            '该赛制同样有个缺点就是，高排名参赛者打了更少的比赛，这样对于慢热的选手反而不利。',
            show:false
        }
    },{
        img1:{
            src:'../images/ppt/maopao.png',
            style:'left:0',
            show:true
        },
        img2:{
            src:'../images/ppt/nb.png',
            style:'bottom:0;right:0',
            show:false
        },
        dec:['佩寄赛',
            '----决赛权赛',
            '----半决赛权赛',
            '----半决赛',
            '----决赛',
            '----铜牌赛',
            '复活赛',
            '----战胜自己的选手如果下轮比赛继续获胜，自己将被复活',
            '----复活赛最后会争夺通牌'
        ],
        section:'淘汰赛',
        title:'佩寄赛和复活赛',
        dec2:{
            dec:'',
            show:false
        }
    },{
        img2:{
            src:'../images/ppt/jiangli.png',
            style:'left:0',
            show:false
        },
        dec:['没有小组赛直接干',
            '双败淘汰',
            '其它细则：',
            '----所有人直接进胜者组，分3人一组，多余的人数直接轮空至下一轮；',
            '----上一轮轮空的人下一轮一定不会轮空；',
            '----胜者组胜利的晋级下一轮，失败者进入败者组；',
            '----胜者组当前轮次结束后，开始下一轮胜者组比赛；',
            '----胜者组当前轮次结束后，败者组人数大于3人，开始败者组比赛，人数不足3人时直接轮空至下一轮；',
            '----当人数不足3人，需要进行淘汰或晋级时，采用roll点方式决出晋级或淘汰者；',
            '----总决赛胜利人数为两人时，通过roll点或协商的方式决出最终胜利者。'
        ],
        section:'实战环节',
        title:'有数杯斗地主大赛',
        dec2:{
            dec:'',
            show:false
        }
    },{
        dec:['没什么规则，只有输赢，没有赢多赢少'
        ],
        section:'实战环节',
        title:'对阵情况',
        dec2:{
            dec:'',
            show:false
        }
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
                case 38:{
                    $scope.pictures[$scope.active].img2.show = true;
                    break;
                }
                case 40:{
                    $scope.pictures[$scope.active].dec2.show = true;
                    break;
                }
                default:{
                    break;
                }
            }
        });
    });
    $scope.firstpeople = [];
    $scope.secpeople = [];
    $scope.thipeople = [];
    $scope.forpeople = [];
    $scope.people5 = [];
    $scope.people6 = [];
    $scope.losp1 = [];
    $scope.losp2 = [];
    $scope.losp3 = [];
    $scope.losp4 = [];
    $scope.losp5 = [];
    $scope.losp6 = [];
    $scope.shuru = function () {
        var cansaizhe = $('#cansaizhe').val();
        $scope.firstpeople = cansaizhe.split(' ');
    };
    $scope.sortrandom =function (n) {
        switch(n){
            case 1:{
                $scope.firstpeople.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 2:{
                $scope.secpeople.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 3:{
                $scope.thipeople.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 4:{
                $scope.forpeople.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 5:{
                $scope.people5.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 6:{
                $scope.people6.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 11:{
                $scope.losp1.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 12:{
                $scope.losp2.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 13:{
                $scope.losp3.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 14:{
                $scope.losp4.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 15:{
                $scope.losp5.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
            case 16:{
                $scope.losp6.sort(function(a,b){
                    return Math.random()>0.3?true:false;
                });
                break;
            }
        }
    };
    $scope.win = function (s,n) {
        switch (s){
            case 1:{
                if($scope.secpeople.indexOf($scope.firstpeople[n])==-1){
                    $scope.secpeople.push($scope.firstpeople[n]);
                }
                break;
            }
            case 2:{
                if($scope.thipeople.indexOf($scope.secpeople[n])==-1){
                    $scope.thipeople.push($scope.secpeople[n]);
                }
                break;
            }
            case 3:{
                if($scope.forpeople.indexOf($scope.thipeople[n])==-1){
                    $scope.forpeople.push($scope.thipeople[n]);
                }
                break;
            }
            case 4:{
                if($scope.people5.indexOf($scope.forpeople[n])==-1){
                    $scope.people5.push($scope.forpeople[n]);
                }
                break;
            }
            case 5:{
                if($scope.people6.indexOf($scope.people5[n])==-1){
                    $scope.people6.push($scope.people5[n]);
                }
                break;
            }
            case 11:{
                if($scope.losp2.indexOf($scope.losp1[n])==-1){
                    $scope.losp2.push($scope.losp1[n]);
                }
                break;
            }
            case 12:{
                if($scope.losp3.indexOf($scope.losp2[n])==-1){
                    $scope.losp3.push($scope.losp2[n]);
                }
                break;
            }
            case 13:{
                if($scope.losp4.indexOf($scope.losp3[n])==-1){
                    $scope.losp4.push($scope.losp3[n]);
                }
                break;
            }
            case 14:{
                if($scope.losp5.indexOf($scope.losp4[n])==-1){
                    $scope.losp5.push($scope.losp4[n]);
                }
                break;
            }
            case 15:{
                if($scope.losp6.indexOf($scope.losp5[n])==-1){
                    $scope.losp6.push($scope.losp5[n]);
                }
                break;
            }
        }
    };
    $scope.lose = function (s,n) {
        switch (s){
            case 1:{
                if($scope.losp1.indexOf($scope.firstpeople[n])==-1){
                    $scope.losp1.push($scope.firstpeople[n]);
                }
                break;
            }
            case 2:{
                if($scope.losp2.indexOf($scope.secpeople[n])==-1){
                    $scope.losp2.push($scope.secpeople[n]);
                }
                break;
            }
            case 3:{
                if($scope.losp3.indexOf($scope.thipeople[n])==-1){
                    $scope.losp3.push($scope.thipeople[n]);
                }
                break;
            }
            case 4:{
                if($scope.losp4.indexOf($scope.forpeople[n])==-1){
                    $scope.losp4.push($scope.forpeople[n]);
                }
                break;
            }
            case 5:{
                if($scope.losp5.indexOf($scope.people5[n])==-1){
                    $scope.losp5.push($scope.people5[n]);
                }
                break;
            }
        }
    };
    $scope.rolldian = function (n) {
        switch (n){
            case 1:{
                $scope.roll1 = Math.floor(101*Math.random());
                break;
            }
            case 2:{
                $scope.roll2 = Math.floor(101*Math.random());
                break;
            }
        }
    }
}]);