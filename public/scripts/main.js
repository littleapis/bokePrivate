require.config({
	baseUrl:'scripts',
    paths:{
        //一些库文件
        'angular': 'framework/angular.min',
        'router': 'framework/angular-ui-router.min',
        'animation':'framework/angular-animate.min',
        'wmuSlider':'framework/jquery.wmuSlider',
        //js文件
        'app':'app'
    },
    shim: {
        'router': {
            deps: ['angular']
        }
    }
});

// 手动初始化myModule模块
require(['app'],function(){
    angular.bootstrap(document, ['myapp'])
})