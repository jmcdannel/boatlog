angular.module('boatlogApp').factory('Runs', ['$firebaseArray',
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    //var ref = new Firebase('https://boatlog.firebaseio.com/runs/');
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://boatlog.firebaseio.com/af/array/full/" + randomRoomId);

    return $firebaseArray(ref);
  }
]);
