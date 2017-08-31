angular.module('header', [])
    .directive('nglHeader', [function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/src/component/common/header/header.html',
            replace: true,
            controller: ['$scope', function ($scope) {
                console.log('顶部');
            }]
        };
    }]);
$('.outLogin').on('click', function ($scope,WEB_API,http) {
        var api = WEB_API.login;
        http[api.method](api.url, function (data) {
            $location.path('/login');
        }, $scope.user);
})