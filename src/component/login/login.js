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
        'api',
        function ($scope, $location, api) {
            $scope.user = {
                tc_name: '前端学院',
                tc_pass: '123456'
            };
            $scope.login = function () {
                // var api = WEB_API.login;
                // http[api.method](api.url, function (data) {
                //     localStorage.setItem('userInfo', JSON.stringify(data));
                //     $location.path('/');
                // },$scope.user);
                api.login(function (data) {
                    localStorage.setItem('userInfo', JSON.stringify(data.result));
                    $location.path('/');
                }, $scope.user);
            };
            //历史头像回显
            var userInfo = JSON.parse(localStorage.getItem('userInfo'));
            $scope.userInfo = userInfo || {tc_avatar : '/public/img/default.png'}
        }
    ])