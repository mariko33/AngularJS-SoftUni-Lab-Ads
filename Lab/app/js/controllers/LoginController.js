'use strict'
// The LoginController holds the presentation logic for login screen

app.controller('LoginController', function($scope,$location,authService,notifyService){
    $scope.login=function (userData) {
        authService.login(userData,function success() {
            notifyService.showInfo("Login successful");
            $location.path("/")

        },function error(err) {
            notifyService.showError("Failed to login", err);
        })
    }
})