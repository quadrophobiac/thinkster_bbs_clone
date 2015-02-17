/**
 * Created by stephen on 17/02/15.
 */
'use strict';

app.factory('Profile', function($window, FIREBASE_URL, $firebase, Post, $q){

  var ref = new $window.Firebase(FIREBASE_URL);

  var profile = {
    get: function (userId) {
      return ;
    },
    getPosts: function(userId) {

    }
  };

  return profile;
});
