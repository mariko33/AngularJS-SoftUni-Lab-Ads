'use strict'

app.factory('userService',function ($http, baseServiceUrl, authService) {

    return{
        createNewAd:function (adData,success,error) {
            var request={
                method:'POST',
                url:baseServiceUrl+'/api/user/ads',
                headers:authService.getAuthHeaders(),
                data:adData
            }
            console.log(authService.getAuthHeaders());
            $http(request).success(success).error(error)

        },

       


        getUsersAds:function (params,success,error) {
            var request={
                method:'GET',
                url: baseServiceUrl + '/api/user/ads',
                headers:authService.getAuthHeaders(),
                params:params
            }
            $http(request).success(success).error(error)

        },
        
        deactivateAd:function (id,success,error) {
            var request={
                method:'PUT',
                url:baseServiceUrl + '/api/user/ads/deactivate/'+id,
                headers:authService.getAuthHeaders()
            };
            $http(request).success(success).error(error)
            
        },
        
        publishAgainAd:function (id,sucess,error) {
            var request={
                method:'PUT',
                url:+baseServiceUrl + '/api/user/ads/publishagain/'+id,
                headers:authService.getAuthHeaders()
                
            };
            $http(request).success(sucess).error(error)
        }




    }

})