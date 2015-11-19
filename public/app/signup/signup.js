angular.module('dvelop.signup', ['dvelop.auth'])

.controller('SignupController', function($scope, UserStore){
	var signup = this;
	signup.authdata = UserStore;
	var key = Object.keys(signup.authdata);
	var name = signup.authdata[key].displayName;
	var email = signup.authdata[key].email;
	var picture = signup.authdata[key].imageURL;
	$scope.name = name; console.log(signup.authdata);
	console.log(name);
	$scope.username = {title: name};
	$scope.email = {title: email};
	$scope.picture = {title: picture};
	console.log(picture);
	//$scope.widget = {title:'abc'};

	$scope.addNew = function() {}

});



