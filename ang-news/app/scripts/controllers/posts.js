/**
 * Created by stephen on 22/12/14.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth){

  $scope.posts = Post.all;
  $scope.user = Auth.user;
  // do not know why this order is suddenly changed
  $scope.post = {url: 'http://'};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
}); // end of controller
