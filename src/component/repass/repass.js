angular.module('repass', [])
    .directive('nglRepass', [function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/src/component/repass/repass.html',
            replace: true,
            controller: ['$rootScope','$scope', function ($rootScope,$scope) {
                $scope.repass = function(){
                    $rootScope.$broadcast('logout');
                };
            }]
        }
    }])