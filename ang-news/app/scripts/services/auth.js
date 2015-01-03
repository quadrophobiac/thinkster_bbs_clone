/**
 * Created by stephen on 03/01/15.
 */
'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope){
  var ref;
  var auth;

  var Auth = {
    register: function(user){
      return auth.$createUser(user.email, user.password);
    },
    login: function(user){
      return auth.$login('password', user);
    },
    logout: function(){
      auth.$logout();
    },
    resolveUser: function(){
      return auth.$getCurrentUser();
    },
    signedIn: function(){
      return !!Auth.user.provider;
    },
    user: {}
  };

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user){});
  $rootScope.$on('$firebaseSimpleLogin:logout', function(){});

  return Auth;
});
