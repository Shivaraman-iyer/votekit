
//TODO very first get request after server starts doesnt populate options list
//require('./utils.js');
function makeJSON(post, poll, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
   // result.poll.options_list = options_list;
    
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}

getPostById = function (postId, callback) {
  var i;
  var obj;
  // Find Post by ID
    VSchemas.Post.findById(postId, function(err, post) { 
      if(err) {
	console.log(err);
	callback(err); }
	
      else if(post){
	
	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      console.log(err.message);
	      callback(err);}
	      else {
		  makeJSON(post, poll, function(result) {
		    callback(null, result);
		    
		  });
	      }
	});
      }
    });
};

getPostsByAuthor = function(author, callback) {
   var result = [];
    VSchemas.Post.find({"who": author}, function(err, posts){
      if(err)  {
	console.log(err);
	callback(err); }
		       else{
			 if(!posts.length){
			 callback(null, result);
			}
		      else {
			posts.forEach(function(post, index, array) {
			  VSchemas.Poll.findById(post.poll, function(err, poll) {
			    if(err)  {
			      console.log(err);
			      callback(err); }
			      else {
				if(poll) {
					    makeJSON(post, poll,  function(generated) {
					      result.push(generated);
					      if(index == array.length-1)
						callback(null, result);
					    });}
			      }
			  });
			});
		      }
		       }
    });
};
getAllPosts = function(callback){
  var result = [];
    VSchemas.Post.find(function(err, posts){
      if(err) callback(err);
		       else{
			 if(!posts.length){
			 callback(null, result);
			   
			}
		      else {
			posts.forEach(function(post, index, array) {
			  VSchemas.Poll.findById(post.poll, function(err, poll) {
			    if(err) callback(err);  
			      else {
				if(poll) {
				 makeJSON(post, poll,  function(generated) {
					      result.push(generated);
					      if(index == array.length-1)
						callback(null, result);
					    });}
			      }
			  });
			});
		      }
		       }
    });
};