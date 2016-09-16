var app =  angular.module("ngModelExamples",[]);
app.controller("exampleCtrl", exampleCtrl);


function exampleCtrl($scope) {

$scope.validateName =  function() {
    console.log("name vvalue is changed");
    var fName = $scope.firstName;
    alert(fName);
    var letters = /^[a-zA-Z]+$/;  
    if(!fName.match(letters))   
    {   
        alert("enter only alphabets in A-Z or a-z");   
        return false;   
    }
}

}