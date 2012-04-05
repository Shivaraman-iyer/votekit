var list= [];
list.push();
function makeJSON_tmp(post, poll, options_list, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    /*var i;
    console.log(options_list.length);
    for(i = 0; i < options_list.length; i++){
      //console.log(options_list[i].toJSON());
     result.options_list.push(options_list[i].toJSON()); 
    }*/
    result.poll.options_list = options_list;
    
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}

function makeJSON(post, poll, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}

getPostById = function (postId, callback) {
  var options_list= [];
  var i;
  var obj;
  // Find Post by ID
    VSchemas.Post.findById(postId, function(err, post) { 
      if(err) {
	console.log(err.message);
	callback(err); }
      else {
	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      console.log(err.message);
	      callback(err);}
	      else {
		//console.log(poll.options_list);
		getOptions(poll.options_list, poll.poll_method, function(err, options){
		  makeJSON_tmp(post, poll, options, function(result) {
		    callback(null, result);
		    
                });
		  
		});
		
		//console.log('options_list: \n', options_list);     
		//send options_list in makeJSOn too
                
            }
	})
	
    }});
};

getOptions = function(options_list, poll_method, callback){
    var i;
    
    //list.length=0;
//    var list = [];
  //  console.log(options_list);
    for(i = 0; i < options_list.length; i++){
      if(poll_method == 'list'){
	VSchemas.OptionList.findById(options_list[i], function(err, option){
	  if(err){
	    console.log(err.message);
	    callback(err);
	  }
	  else{
	    
	    list.splice(i, 1, option.toJSON());
	    //console.log(list);
	  }
	});
    }
    else if(poll_method == 'like-dislike'){
	VSchemas.OptionLikeDislike.findById(options_list[i], function(err, option){
	  if(err){
	    console.log(err.message);
	    callback(err);
	  }
	  else{
	    
	     list.splice(i, 1, option.toJSON());
	    //console.log(list);
	  }
	});
    }
    else if(poll_method == 'stars'){
	VSchemas.OptionStar.findById(options_list[i], function(err, option){
	  if(err){
	    console.log(err.message);
	    callback(err);
	  }
	  else{
	    
	     list.splice(i, 1, option.toJSON());
	    //console.log(list);
	  }
	});
    }
    }
    console.log(list);
    callback(null, list);
};

getPostsByAuthor = function(author, callback) {
  var result = [];
    VSchemas.Post.find({ 'who' : author}, function(err, posts){
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
				  getOptions(poll.options_list, poll.poll_method, function(err, options){
				    makeJSON_tmp(post, poll, options, function(generated) {
					result.push(generated);
                        });});
				if(index == array.length-1)
				  callback(null, result);
                    }
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
				  getOptions(poll.options_list, poll.poll_method, function(err, options){
				    makeJSON_tmp(post, poll, options, function(generated) {
					result.push(generated);
                        });});
				if(index == array.length-1)
				  callback(null, result);
                    }
                }
            });
        });
			  }
		       }
    });
};
