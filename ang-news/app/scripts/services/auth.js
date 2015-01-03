/**
 * Created by stephen on 03/01/15.
 */
'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope){
  var ref;
  var auth;

  var Auth = {
    register,
    login,
    logout,
    resolveUser,
    signedIn,
    user
  };

  $rootScope.$on('', function(){});

  return Auth;
});
