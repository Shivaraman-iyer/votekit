
function makeJSON(post, poll, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    //result.poll.options_list = options_list;
    
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
};



/*getAvgStarRating = function(postId, optionNum, callback){
  getPostById(postId, function(err, post){
    if(err)
      callback(err);
    else if(optionNum > post.poll.options_list.length || post.poll.poll_method != 'stars')
      callback("Bad arguments");
    else{
      
      var option = post.poll.options_list[optionNum - 1];
	avg = (option.whoChose1.length+
	      (option.whoChose2.length * 2)+
	      (option.whoChose3.length * 3)+
	      (option.whoChose4.length * 4)+
	      (option.whoChose5.length * 5))/
	      (option.whoChose1.length +
		option.whoChose2.length +
		option.whoChose3.length +
		option.whoChose4.length +
		option.whoChose5.length);
	
	callback(null, {avg_rating : avg});
      
    }
  });
};*/

/*getNumOfVotes = function(postId, optionNum, callback){
  getPostById(postId, function(err, post){
    if(err)
      callback(err);
    else if(post.poll.poll_method != 'list')
      callback("Bad arguments");
    else{
      
      	callback(null, {votes : post.poll.options_list[optionNum - 1].choosers.length});
      
    }
  });
};*/

getNumOfLikes = function(postId, optionNum, callback){
  getPostById(postId, function(err, post){
    if(err)
      callback(err);
    else if(optionNum > post.poll.options_list.length || post.poll.poll_method != 'like-dislike'){
      
      callback(new Error("Bad arguments"));
    }
    else{
      //obj = (post.poll.options_list[optionNum-1]);//this is done twice because the first GET request after server starts does not expand options. Can be removed once this is fixed.
      //console.log(obj);
      callback(null, {likes : post.poll.options_list[optionNum - 1].who_likes.length});
      
    }
  });
};
getNumOfDislikes = function(postId, optionNum, callback){
  getPostById(postId, function(err, post){
    if(err)
      callback(err);
    else if(optionNum > post.poll.options_list.length || post.poll.poll_method != 'like-dislike'){
      
      callback(new Error("Bad arguments"));
    }
    else{
      callback(null, {dislikes : post.poll.options_list[optionNum - 1].who_dislikes.length});
      
    }
  });
};

getRecentPollsByDate = function(x, callback){
  var result = [];
  var obj;
  VSchemas.Post.find().sort(Date.now, -1).limit(x).run(function(err, posts){
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
  
getRecentPollsOfAuthor = function(author, x, callback){
  var result = [];
  var obj;
  VSchemas.Post.find({"who":author}).sort(Date.now, -1).limit(x).run(function(err, posts){
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