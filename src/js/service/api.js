// 这个服务结合了http和WEB_API为一体
angular.module('api',[])
    .factory('api',[
        'WEB_API',
        'http',
        function(WEB_API,http){
            var api = {};
            angular.forEach(WEB_API,function(config,key){
                api[key] =function(fn,data){
                    http[config.method](config.url,fn,data)
                };
            });
            return api;
        }
    ])