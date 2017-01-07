'use strict'

//The AppController holds the presentation logic for entire app (common for all screens )

app.controller('AppController',function($scope,$location, authService, notifyService){
    $scope.authService=authService;

    //Implement the logout button click event handler
    $scope.logout=function () {
        authService.logout();
        notifyService.showInfo("Logout successful");
        $location.path('/')

    }
})