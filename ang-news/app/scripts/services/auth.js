/**
 * Created by stephen on 03/01/15.
 */
'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope){
  var ref;
  var auth;

  var Auth = {
    register: function(user){},
    login: function(user){},
    logout: function(){},
    resolveUser: function(){},
    signedIn: function(){},
    user: {}
  };

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user){});
  $rootScope.$on('$firebaseSimpleLogin:logout', function(){});

  return Auth;
});
