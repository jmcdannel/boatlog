'use strict';
/**
 * @ngdoc function
 * @name boatlogApp.controller:EntryCtrl
 * @description
 * # EntryCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('boatlogApp')
  .controller('EntryCtrl', function ($scope, Ref, $firebaseArray) {

    $scope.days = '1';
    $scope.runs = '1';
    $scope.runs = $firebaseArray(Ref.child('runs'));

    $scope.addRun = function() {

      var runData = {
        rundate: $scope.rundate,
        section: $scope.section,
        river: $scope.river,
        days: $scope.days,
        numruns: $scope.numruns,
        miles: $scope.miles,
        vertical: $scope.vertical,
        flow: $scope.flow,
        notes: $scope.notes || null,
        timestamp: Firebase.ServerValue.TIMESTAMP
      };
      console.log(runData);
      $scope.runs.$add(runData);

      $scope.rundate = '';
      $scope.section = '';
      $scope.river = '';
      $scope.days = '1';
      $scope.numruns = '1';
      $scope.miles = '';
      $scope.vertical = ''
      $scope.flow = ''
      $scope.notes = '';

    };

    // $scope.runs.$loaded(function() {
    //   if ($scope.runs.length === 0) {
    //     $scope.runs.$add({
    //       rundate: new Date(),
    //       section: 'asdf',
    //       river: 'asdf',
    //       days: 1,
    //       numruns: 1,
    //       miles: 1,
    //       vertical: 1,
    //       flow: 'asdf',
    //       notes: 'asdf',
    //       timestamp: Firebase.ServerValue.TIMESTAMP
    //     });
    //   }
    // });

  });
