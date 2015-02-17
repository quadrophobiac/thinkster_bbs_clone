/**
 * Created by stephen on 17/02/15.
 */
'use strict';

app.factory('Profile', function($window, FIREBASE_URL, $firebase, Post, $q){

  var ref = new $window.Firebase(FIREBASE_URL);

  var profile = {
    get: function (userId) {
      return $firebase(ref.child('profile').child(userId)).$asObject();
    },
    getPosts: function(userId) {
      var defer = $q.defer();

      $firebase()
        .$asArray()
        .$loaded()
        .$then(function(data) {

        });

      return defer.promise;
    }
  };

  return profile;
});
