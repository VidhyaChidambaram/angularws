var clockApp = angular.module("clockApp", []);
clockApp.controller("mainController", MainFn);

function MainFn($scope) {
                var currentDate = new Date();
                $scope.currentDate = currentDate.toTimeString();
                $scope.updateTimeFn = function() {
                    console.log("Button Clicked");
                    currentDate = new Date();
                    $scope.currentDate = currentDate.toTimeString();
                }
}
