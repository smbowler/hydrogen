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
      zipCode: "20001",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "20000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "20000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "11290",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
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
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
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
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },{
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Shan",
      lastName: "Batla",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }, 
    {
      firstName: "Peter",
      lastName: "Park",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    },
    {
      firstName: "Alice",
      lastName: "Green",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "5",
      interest: ''
    }, 
    {
      firstName: "Sam",
      lastName: "Bowler",
      address: "US",
      zipCode: "10000",
      skillLevel: "Newbie",
      yearExperience: "1",
      interest: ''
    }

  ];

  return {
    users: users
  };
})

//route (dont forget the pound sign!) >> http://localhost:5000/#/search