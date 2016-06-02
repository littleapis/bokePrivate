define(['app','wmuSlider'],function(app){
    app.register
    .controller('photos', function($scope,$http){
    	
    });
     //轮播服务（延迟加载）
    app.register
    .service('readJSON',['$http','$q', function ($http,$q) {
        return {
            query: function () {
                var deferred=$q.defer();
                $http({
                    method:'GET',
                    url:'scripts/fileJson/detail.json'
                }).success(function (data, status, header, config) {
                    deferred.resolve(data);
                }).error(function (data, status, header, config) {
                    deferred.reject(data);
                });
                return deferred.promise;
            }
        }
    }]);
    //轮播指令
    app.register

    .directive('lunbo',['readJSON', function () {
        return{
            restrict:'EA',
            templateUrl:'tpls/carousel.html',
            scope:{},
            replace:true,
            link: function (scope, element, attr) {
                //创建轮播信息
                element.wmuSlider();
            }
        }
    }]);
})