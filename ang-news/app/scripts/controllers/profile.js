/**
 * Created by stephen on 17/02/15.
 */
'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, Profile){
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function(posts){
    $scope.posts = posts;
  });

});
