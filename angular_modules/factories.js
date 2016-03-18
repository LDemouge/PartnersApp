(function(){
	
	var app = angular.module('factories', []);
	
	app.factory('User', function UserModel(){
		function User(id, name) {
			this.id = id;
			var lastname = name;
			this.getLastname = function(){return lastname;}
		}
		User.prototype.isStub = true;
		return User;
	});
	
	app.factory('EventDispatcher', function(){
		
		function startListening(){
			var ref = new Firebase("https://partners-sgv3.firebaseio.com/test");
			var first = true;
		
			ref.child("contacts")
				.limitToLast(1).on('child_added', function(snap, prev) {
					//ref.child('duplicates').push(snap.val());
					
					console.log('factory message : child ' + snap.key() + ' added');
				},
				{
					function (error) {
						console.log(error.code);
					}
				});
		}
		
		function test(name){
			if(undefined===name) throw "erreur";
			console.log("hello " + name + "! I'm the factory");
		}
		
		return {start: test};
		
		
	});
	
})();
