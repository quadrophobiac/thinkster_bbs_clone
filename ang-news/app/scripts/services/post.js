/**
 * Created by stephen on 30/12/14.
 */
'use strict';

app.factory('Post', function ($firebase, FIREBASE_URL){
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

  var Post = {
    all: posts,
    create: function(post){
      return posts.$add(post); // this returns a promise
    },
    get: function(postId) {
      return $firebase(ref.child('posts')).$asObject();
    },
    delete: function(post){
      return posts.$remove(post);
    }
  };

  return Post;
});

