/**
 * Created by stephen on 31/12/14.
 */
'use strict';

app.controller('PostViewCtrl', function($scope, $routeParams, Post, Auth){

  $scope.post = Post.get($routeParams.postId);
  // routeParams returns the name of the database entry in Firebase
  // this id is being passed to the Post service, and its method
  $scope.comments = Post.comments($routeParams.postId);
  console.log("hey world");

  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;
  console.log("on a page controlled by PostViewCtrl");

  $scope.addComment = function(){
    if(!$scope.commentText || $scope.commentText === ''){
      return;
    }

    var comment = {
      text: $scope.commentText,
      creator: $scope.user.profile.username,
      creatorUID: $scope.user.uid
    };

    $scope.comments.$add(comment);

    $scope.commentText = '';
  };

});
