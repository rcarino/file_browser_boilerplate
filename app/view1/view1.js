'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }
  ])

  .controller('View1Ctrl', [
    function() {

    }
  ])

  .factory('DirectoryBrowser', function() {
    // Your service goes here
    return {
      bloop: function() {
        return 'bloop';
      }
    }
  });