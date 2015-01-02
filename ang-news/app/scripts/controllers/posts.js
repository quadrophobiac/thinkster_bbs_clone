/**
 * Created by stephen on 22/12/14.
 */
'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post){

  $scope.posts = Post.all;
  // do not know why this order is suddenly changed
  $scope.post = {url: 'http://'};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function(ref){
      $location.path('/posts/' + ref.name());
    });
  };
  $scope.deletePost = function (post) {
    Post.delete(post);
  };
}); // end of controller
