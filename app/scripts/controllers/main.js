'use strict';

/**
 * @ngdoc function
 * @name boatlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boatlogApp
 */
angular.module('boatlogApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray) {
    $scope.runs = $firebaseArray(Ref.child('runs'));

    $scope.runs.$loaded(function(runs) {
      $scope.totals = {
        days: _.sumBy($scope.runs, function(o) { return parseInt(o.days); }),
        runs: _.sumBy($scope.runs, function(o) { return parseInt(o.numruns); }),
        miles: _.sumBy($scope.runs, function(o) { return parseInt(o.miles); }),
        feet: _.sumBy($scope.runs, function(o) { return parseInt(o.vertical); }),
      };

    });


  });
