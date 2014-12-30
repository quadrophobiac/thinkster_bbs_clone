/**
 * Created by stephen on 22/12/14.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, Post){
  $scope.post = {url: 'http://', title: ''};
  $scope.posts = [];

  $scope.submitPost = function () {
    $scope.posts.push($scope.post);
    $scope.post = {url: 'http://', title: ''};
  };
  $scope.deletePost = function (index) {
    $scope.posts.splice(index, 1);
  };

}); // end of controller
