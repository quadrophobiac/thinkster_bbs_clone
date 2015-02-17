/**
 * Created by stephen on 30/12/14.
 */
'use strict';

app.factory('Post', function ($firebase, FIREBASE_URL){
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebase(ref.child('posts')).$asArray();

  var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post).then(function(postRef) {
        $firebase(ref.child('user_posts').child(post.creatorUID))
          .$push(postRef.name());
        return postRef;
      });
    },
    get: function (postId) {
      console.log("this is the ID i got: "+postId)
      return $firebase(ref.child('posts')).$asObject();
    },
    delete: function(post){
      return posts.$remove(post);
    },
    comments: function(){
      return $firebase(ref.child('comments').child(postId)).$asArray();
    }
  };

  return Post;
});

