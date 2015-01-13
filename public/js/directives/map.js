app.directive('smthMap', function(){  
	return {
	    restrict: 'E',
	    templateUrl: 'views/mapView.html',
		controller:function($scope){
		    $scope.$on('mapInitialized', function(event, map) {
		      map.setCenter({lat: -34, lng: 151});
		      map.setZoom(15);
		    });
		},
		controllerAs: 'panels'
	};
});