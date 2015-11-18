angular.module('dvelop.search', [])

.controller('SearchController', function (SearchService){

  var search = this;

  search.users = SearchService.users;

  search.input = ''
  // $scope.search = '';



})

.factory('SearchService', function(){
  //prototipal pattern
  var users = [

    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    },{
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000"
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000"
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000"
    }

  ];

  return {
    users: users
  };
})

//route (dont forget the pound sign!) >> http://localhost:5000/#/search