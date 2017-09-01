angular.module('profile',[])
.directive('nglProfile',[function(){
    return {
        scope:{},
        restrict:'E',
        templateUrl:'/src/component/profile/profile.html',
        replace:true,
        controller:['$scope',function($scope){
            console.log('个人中心');
        }]
    };
}]);