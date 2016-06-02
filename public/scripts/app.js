define(['router'],function(){
    var app = angular.module("myapp", ['ui.router'])
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){      
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service
        };
    })
    .run(function($rootScope,$state,$stateParams,$templateCache){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $templateCache.put("tpls/carousel.html");
        $rootScope.tab = 1;//default
    })
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/index');
        $stateProvider
        //新闻页面-主界面
        .state('index',{
            url:"/index",
            views:{
                '':{
                    templateUrl: 'tpls/home.html',
                },
                "firstBar@index":{
                    templateUrl: 'tpls/firstBar.html',
                    controller:'photos'
                },
                "secondBar@index":{
                    templateUrl: 'tpls/homeAction.html',
                }
            },
            resolve: {
                loadCtrl: ["$q", function($q) { 
                    var deferred = $q.defer();
                    //异步加载controller／directive/filter/service
                    require([
                        'controllers/mainController' 
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
            
        })
        //故事
        .state('index.photos',{
            url:'/photos',
            views:{
                "secondBar@index":{
                    templateUrl: 'tpls/story.html'
                }
            }
        })
        //心情
        .state('index.blog',{
            url:'/blog',
            views:{
                "secondBar@index":{
                    templateUrl:'tpls/blog.html'
                }
            }
        })
        .state('index.blog.single',{
            url:'/single',
            views:{
                "secondBar@index":{
                    templateUrl:'tpls/single.html'
                }
            }
        })
        //联系我
        .state('index.mail',{
            url:'/mail',
            views:{
                "secondBar@index":{
                    templateUrl:'tpls/mail.html'
                }
            }
        })
    }) 
　　return app;
})