/**
 * Created by stephen on 02/01/15.
 */
'use strict';

app.controller('NavCtrl', function($scope, $location, Post, Auth){
  $scope.post = {url: 'http://', title: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;

  $scope.submitPost = function (){
    // new posts associating functionality
    $scope.post.creator = $scope.user.profile.username;
    $scope.post.creatorUID = $scope.user.uid;

    Post.create($scope.post).then(function(ref){
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    })
  };
});
