/**
 * Created by stephen on 31/12/14.
 */
'use strict';

app.controller('PostViewCtrl', function($scope, $routeParams, Post){
  $scope.post = Post.get($routeParams.postId);
});
