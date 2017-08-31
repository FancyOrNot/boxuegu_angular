angular.module('login', [])
    .directive('nglLogin', [function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/src/component/login/login.html',
            replace: true,
            controller: 'nglLoginCtrl'
        };
    }])
    .controller('nglLoginCtrl', [
        '$scope',
        '$location',
        'WEB_API',
        'http',
        function ($scope, $location, WEB_API, http) {
            $scope.user = {
                tc_name: '前端学院',
                tc_pass: '123456'
            };
            $scope.login = function () {
                var api = WEB_API.login;
                http[api.method](api.url, function (data) {
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    $location.path('/');
                },$scope.user);
            };
        }
    ])