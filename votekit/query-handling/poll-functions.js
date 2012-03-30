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
