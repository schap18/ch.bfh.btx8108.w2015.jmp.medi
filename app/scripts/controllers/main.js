/**
 * Created by JsMac on 11/5/15.
 */
'use strict';

angular.module('mediappjmp')
  .controller('MainCtrl', function($scope) {
    $scope.todos = ['Plavix Tbl 75mg', 'IBU Sandoz Tbl 400mg', 'Panprax Tbl 20mg', 'weiteres Medi'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = [];
    };
  });
