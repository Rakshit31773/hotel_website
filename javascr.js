var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.loc = false;
    $scope.meal = false;
    $scope.gym = false;

    $scope.location_content = function () {
        if ($scope.loc == false) {
            $scope.loc = true;
        }
        else {
            $scope.loc = false;
        }
    }
    $scope.meal_content = function () {
        if ($scope.meal == false) {
            $scope.meal = true;
        }
        else {
            $scope.meal = false;
        }
    }
    $scope.gym_content = function () {
        if ($scope.gym == false) {
            $scope.gym = true;
        }
        else {
            $scope.gym = false;
        }
    }
});