angular.module('header',[])
 .directive('nglHeader',[function(){
    return{
        scope:{},
        restrict:'E',
        templateUrl:'/src/component/common/header/header.html',
        replace:true,
        controller:['$scope',function($scope){
            console.log('顶部');
        }]
    };
 }]);