angular.module('TestApp',[]);
angular.module('TestApp')
            .controller('MainController',ctrlerFunc)
            .controller("SecondController", secondCtrler);

function ctrlerFunc($scope){
    var ctrl=this;
    ctrl.name='Ranjan';
    $scope.nameScope = 'Ranjan controller';
    this.message = 'Hello ranjan from controller function';
//    this.people = clientPeople;
    this.people = [
    {
        name:'ranjan',
        lastName:'kumar'
    },
    {
        name:'rahul',
        lastName:'kumar'
    }
]

$scope.cal=0;
$scope.inc = function(){
    $scope.cal=$scope.cal+1;
}
$scope.dec=function(amt){
    $scope.cal=$scope.cal-amt;
}
}

function secondCtrler(){
    var ctrl=this;
    ctrl.name= 'kumar';
}