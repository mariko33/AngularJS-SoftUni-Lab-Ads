'use strict'
// The HomeController holds the presentation logic for the home page
app.controller('HomeController',function($scope,$rootScope,adsService,notifyService,pageSize){
   $scope.adsParams={
       'startPage':1,
       'pageSize':pageSize
   };

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    //console.log(data);
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });


        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });


        $scope.reloadAds();
    }
);