app.controller('mainController', function($scope, $http){
	$scope.Title = "OvrC Home API Test Application";
  $scope.ButtonName = "Click API";

  $scope.open = function(){
    $http.get('/api/ovrc')
      .success(function(data, status, headers, config) {
            console.log("Success!");
        }).error(function(e){
          console.log(e);
        });

    };
});
