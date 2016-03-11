(function(){
	
	var controllers = angular.module('partnerController',['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.grid', 'ui.grid.selection']);
	
	controllers.controller('aSupplierCtrl', function($scope, $stateParams){
		$scope.supplier = {};
		$scope.supplierId = $stateParams.supplierId;
	});
	
	
	controllers.controller('suppliersCtrl', function($scope, $state){
		
		
		
		$scope.gridOptions = {
			enableFiltering: true,
			showGridFooter: true,
			enableRowHeaderSelection: false,
			multiSelect: false,
			onRegisterApi: function(gridApi){
                  //set gridApi on scope
                  //$scope.gridApi = gridApi;
                 // $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
                  gridApi.selection.on.rowSelectionChanged($scope, function(row){
                  $state.go('supplier.identity', {supplierId: row.entity.id});
                  });},
			columnDefs: [
				{ field: 'company', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'mainContact', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'mainAddress', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'phone', visible: false, headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'performances', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'rating', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'specializations', headerCellClass: $scope.highlightFilteredHeader },
				{ field: 'blacklisted'}//, headerCellClass: $scope.highlightFilteredHeader }
				]
		};
		
		
		$scope.gridOptions.data = testGridData;
		
		$scope.currentSpecializations = [{"id":"1", "text":"graphism"}, {"id":"2", "text":"design"}, {"id":"3", "text":"video"}];
		console.log($scope.currentSpecializations);
		
		$scope.getTableHeight = function() {
			rowHeight = 34; // your row height
			headerHeight = 75; // your header height
			return {
					height: ($scope.gridOptions.data.length * rowHeight + headerHeight) + "px"
					};
			};
	});
	
	
	
	controllers.controller('supplierContactsCtrl', function($scope, $http){
		
		$scope.gridOptions = {
			enableFiltering: true,
			enableRowHeaderSelection: false,
			multiSelect: false,
			enableColumnMenus: false,
			columnWidth: "100%",
			columnDefs: [
				{field: 'fullname', headerCellClass: $scope.highlightFilteredHeader },
				{field: 'id', visible:false, headerCellClass: $scope.highlightFilteredHeader }
			]
		};
		
		console.log($scope.gridOptions);
		$scope.gridOptions.data = testContactsList;
		$scope.getTableHeight = function() {
			rowHeight = 34; // your row height
			headerHeight = 75; // your header height
			return {
					height: ($scope.gridOptions.data.length * rowHeight + headerHeight) + "px"
					};
			};
		
	});
	
	
	controllers.controller('supplierPerformances', function(){});
	
	
	controllers.controller('testCtrl', function(){
		var rootRef = new Firebase("https://partners-sgv3.firebaseio.com/test");
		
		var testRef = rootRef.child("contacts");
		
		testRef.set({
 			 alanisawesome: {
    				date_of_birth: "June 23, 1912",
    				full_name: "Alan Turing"
  			},
  			gracehop2: {
    				date_of_birth: "December 9, 1906",
    				full_name: "Grace Hopper"
  			}
		});
		
	});
	
	
	var testGridData = [
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5", "specializations":["design", "graphics", "video"], "blacklisted":true},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"},
			{id:"12","company": "Alter&Go Groupe", "mainContact":"Xavier Sabouraud", "mainAddress":"47 boulevard Diderot - 75011 PARIS", "phone":"01.23.45.67.89", "performances":"5","rating":"3,8 / 5"}
			
		];
		
	var testContactsList = [
	{"id":"1", "fullname":"Laurent Demouge"},
	{"id":"2", "fullname":"Raoul Dugenou"},
	{"id":"3", "fullname":"Sophie Telle"},
	{"id":"4", "fullname":"Papy Mougeot"},
	{"id":"5", "fullname":"Kadératé Yamaha"},
	{"id":"6", "fullname":"Lastbut NotLeast"}
];

		
	
})();
