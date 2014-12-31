/**
 * Created by stephen on 22/12/14.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, Post){

  $scope.posts = Post.all;
  // do not know why this order is suddenly changed
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function(){
      $scope.post = {url: 'http://', title: ''};
    });
  };
  $scope.deletePost = function (post) {
    Post.delete(post);
  };
}); // end of controller
