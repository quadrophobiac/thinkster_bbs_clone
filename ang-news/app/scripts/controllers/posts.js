/**
 * Created by stephen on 22/12/14.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth){
  // Auth service injected into Posts controller in order to control deletion via uid
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;
  // do not know why this order is suddenly changed
  $scope.post = {url: 'http://'};

  $scope.deletePost = function (post) {
    Post.delete(post);
  };
}); // end of controller
