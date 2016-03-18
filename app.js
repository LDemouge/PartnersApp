(function(){
	
	var app = angular.module('partner', [
		'partnerRoute', 'partnerController', 'partnerDirectives', 'ngTagsInput', 'firebase', 'factories']);
		
	app.run(['EventDispatcher', function(eventDispatcher){
		eventDispatcher.start('laurent');
	}])
		
	
	
	
	
	
	
	
})();

