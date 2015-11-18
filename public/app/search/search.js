angular.module('dvelop.search', ['dvelop.auth'])

.controller('SearchController', function (SearchService, Auth, logout, $location){

  var search = this;

  search.users = SearchService.users;
  search.input = ''
  // $scope.search = '';

  search.logout = logout.logout;

})

//service for SearchService
.factory('SearchService', function ($http){

  //random User Generator
  var userGenerator = function(userNum){
    var users = [];
    var user = {}
    var firstNameCollection = ['Shan', 'Peter', 'Sam', 'Alice', 'Nick', 'Bella', 'Erik', 'Dan'];
    var lastNameCollection = ['Batla', 'Park', 'Kim', 'Shen', 'Green', 'Bowler'];
    var addressCollection = ['Soul, South Korea', 'New orlendo, US', 'New York, US', 'New Jersey, US', 'Los Angeles, US'];
    var skillCollection = ['advanced', 'intermediate', 'newbie'];
    var interestCollection = ['AngularJS', 'ReactJS', 'Backbone', 'NodeJS', 'ExpressJS', 'MongoDB'];
    var bestAtCollection = ['AngularJS', 'ReactJS', 'Backbone', 'NodeJS', 'ExpressJS', 'MongoDB'];
    var zipCode = function(){
      var numCol = '1234567890';
      var result = '1';
      for(var i=0; i<4; i++){
        result += Math.floor(Math.random()*numCol.length);
      }
      return result;
    }
    var yearExpGen = function(){
      var numCol = '123456789'
      return Math.floor(Math.random()*numCol.length);
    }

    var avatarGen = function() {
      var baseUrl = 'https://randomuser.me/api/portraits/';
      var gender = ['men', 'women'];
      var randomNum = Math.floor(Math.random()*50);
      var resultUrl = baseUrl+gender[Math.floor(Math.random()*gender.length)]+'/'+randomNum+'.jpg';
      return resultUrl;
    }

    for(var i=0; i<userNum; i++){
      user.avatar = avatarGen();
      user.firstName = firstNameCollection[Math.floor(Math.random()*firstNameCollection.length)];
      user.lastName = lastNameCollection[Math.floor(Math.random()*lastNameCollection.length)];
      user.address = addressCollection[Math.floor(Math.random()*addressCollection.length)];
      user.zipCode = zipCode();
      user.skillLevel = skillCollection[Math.floor(Math.random()*skillCollection.length)];;
      user.yearExperience = yearExpGen();
      user.bestAt = bestAtCollection[Math.floor(Math.random()*bestAtCollection.length)];;
      user.interest = interestCollection[Math.floor(Math.random()*interestCollection.length)];;;
      users.push(angular.copy(user));
    }
    console.log('usersinthefunc',users);
    return users;
  }

  var users = userGenerator(500);

  return {
    users: users
  };
})

//route (dont forget the pound sign!) >> http://localhost:5000/#/search