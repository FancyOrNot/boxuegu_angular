angular.module('course')
.directive('nglCsAdd',[function(){
    return{
        scope:{},
        restrict:'E',
        templateUrl:'/src/component/course/add/add.html',
        replace:true,
        controller:['$scope',function(){
            console.log('课程添加');
        }]
    }
}])