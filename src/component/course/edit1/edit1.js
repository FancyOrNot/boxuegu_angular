angular.module('course')
.directive('nglCsEdit1',[function(){
    return{
        scope:{},
        restrict:'E',
        templateUrl:'/src/component/course/edit1/edit1.html',
        replace:true,
        controller:['$scope',function(){
            console.log('课程编辑1');
        }]
    }
}])