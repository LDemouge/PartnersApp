(function(){
	var directives = angular.module('partnerDirectives', ['ngTagsInput']);
	
	directives.directive('selectSpecialization', function(){
		return {
			templateUrl: "views/directives/select-specializations.html",
			controller: function($scope, $http) {
         						 /**$scope.specializations = [
            							{ text: 'just' },
           								{ text: 'some' },
            							{ text: 'cool' },
            							{ text: 'tags' }
          								]; **/
          								console.log($scope.specializations);
          						//$scope.tagAdded = function(){console.log($scope.specializations);};		
          						$scope.loadAvailableSpecializations = function(query) {
            							return $http.get('specializations.json');
          								};
        				
				},
			scope: {
				specializations: '=tags'
			}
		};
	});
})();
