(function(){
	
	var router = angular.module('partnerRoute', ['ui.router']);
	
	router.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/suppliers');
		
		$stateProvider
			
			.state('suppliers', {
				url: '/suppliers',
				templateUrl: 'views/suppliers.html',
				controller: 'suppliersCtrl'
			})
			
			.state('test', {
				url: '/test',
				templateUrl: 'views/test.html',
				controller: 'testCtrl'
			})
			
			.state('newSupplier', {
				url: '/suppliers/new',
				templateUrl: 'views/new-supplier.html',
				controller: 'suppliersCtrl'
			})
			
			.state('supplier', {
				url: '/suppliers/:supplierId',
				templateUrl: 'views/supplier.html',
				controller: 'aSupplierCtrl'
			})
			
			.state('supplier.identity', {
				url: '/identity',
				template: "<h3>Supplier {{supplierId}}'s identity</h3>"
			})
			
			.state('supplier.addresses', {
				url: '/addresses',
				//template: "<h3>Supplier's addresses</h3>"
				templateUrl: 'views/suppliers.html',
				controller: 'suppliersCtrl'
			})
			
			.state('supplier.contacts', {
				url: '/contacts',
				templateUrl: "/views/supplier-contact-list.html",
				controller: "supplierContactsCtrl"
				
			})
			
			.state('supplier.specializations', {
				url: '/specializations',
				templateUrl: "views/directives/select-specializations.html",
				controller: function($scope, $http) {
         						
         						console.log($scope.currentSpecializations);
          						$scope.tagAdded = function(){console.log($scope.specializations);};		
          						$scope.loadAvailableSpecializations = function(query) {
            							return $http.get('specializations.json');
          								};
        					}
			})
			
			.state('supplier.performances', {
				url: '/performances',
				template: "<h3>Supplier's performances</h3>"
			})
			;
	});
})();
