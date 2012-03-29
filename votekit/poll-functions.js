// create a post + content pair from the received object
function createPost(object, callback) {
  //console.log('creating: ', object); 
    post = new VSchemas.Post();
    poll = new VSchemas.Poll();
    console.log('passing to poll.create: ', object.poll);
    poll.create(object.poll, function(err) {  if(err) callback(err);  else {
        // change the value of object.poll to the ID of the content object, because that is what the schema wants
        object.poll = poll._id;
	console.log("createPost: poll = ", poll);
        // create a post from the original object
        post.create(object, function(err) { if(err) callback(err);  else {
	  console.log('post created: ', post);
            callback(null, post, poll);
        }});
    }});
};

function savePost(post, poll, callback) {
    // save content first
    
    poll.save( function(err) {   if(err) callback(err);  else {
        // save post next
        console.log('savePost: poll.save done');
        post.save( function(err) {
            // if could not save post, get content out of system
            if(err) poll.remove( function() { callback(err); });
            else {
                // return successfully created post's ID for great good
                callback(null, post._id);
            }
        });
    }});
};

publish = function publishPost(object, callback) {
  //console.log('publishing: ', object); 
  createPost(object, function(err, post, poll) {   if(err) callback(err);  else {
        savePost(post, poll, function(err, postId) { if(err) callback(err);  else {
          callback(null, postId);
                }});
    }});
};

function makeJSON(post, poll, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    // We don't want to users to see the _id key in anything except the post's top level
    removeKeyRecursively(result.poll, '_id');
    callback(result);
}

getPost = function (postId, callback) {
    // Find Post by ID
    VSchemas.Post.findById(postId, function(err, post) {    if(err) callback(err); else {
        // Find post's content in the post.data.postType collection
        TSchemas.Poll.findById(post.poll, function(err, content) {
            if(err) callback(err);  else {
                makeJSON(post, poll, function(result) {
                    callback(null, result);
                });
            }
        });
    }});
};

/*
// Arbitrary mongo query API - needs a lot of testing and query detox
queryPostContentOne = function(postType, query, options, callback) {
    TSchemas.model(postType).findOne(query, options, function(err, content) {   if(err) callback(err);  else {
        TSchemas.Post.findOne({ 'data.content': content._id }, function(err, post) {
            if(err) callback(err);  else {
                makeJSON(post, content, function(result) {
                    callback(null, result);
                });
            }
        });
    }});
};

queryPost = function(query, options, callback) {
    var result = [];
    TSchemas.Post.find(query, {}, options, function(err, posts) {  if(err) callback(err);  else {
        if(!posts.length) {
            callback(null, result);
        }
        else {
        posts.forEach(function(post, index, array) {
            TSchemas.model(post.data.postType).findById(post.data.content, function(err, content) {
                if(err) callback(err);  
                else {
                    if(content) {
                        makeJSON(post, content, function(generated) {
                            console.log(generated._id);
                            result.push(generated);
                        });
                        if(index == array.length-1)
                            callback(null, result);
                    }
                }
            });
        });
        } // end else
    }});
}


// TODO: This has a heisenbug, it may or may not return all posts before moving on, copy the solution from the above function
queryPostContent = function(postType, query, options, callback) {
    var result = [];
    TSchemas.model(postType).find(query, {}, options).each( function(err, content) {  if(err) callback(err);  else {
        TSchemas.Post.findOne.findOne({'data.content': content_id}, function(err, post) {
            if(err) callback(err);  
            else {
                if(post) {
                    makeJSON(post, content, function(generated) {
                        result.push(generated);
                    });
                }
                else {
                    callback(null, result);
                }
            }
        });
    }});
}
*/
