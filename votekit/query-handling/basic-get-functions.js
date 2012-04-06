
//TODO very first get request after server starts doesnt populate options list
//require('./utils.js');
function makeJSON(post, poll, options_list, callback) {
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

getPostById = function (postId, callback) {
  //var options_list= [];
  var i;
  var obj;
  // Find Post by ID
    VSchemas.Post.findById(postId, function(err, post) { 
      if(err || !post) {
	console.log(err);
	callback(err); }//TODO add proper error message
      else {
	//console.log('poll id you are looking for : ', post);
	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      console.log(err.message);
	      callback(err);}
	      else {
		//console.log(poll.options_list);
		var list= new Array();

		getOptions(list, poll.options_list, poll.poll_method, function(err, options){
		
		  makeJSON(post, poll, list, function(result) {
		    callback(null, result);
		    
                });
		  
		});
		
            }
	})
	
    }});
};

getOptions = function(list, options_list, poll_method, callback){
//    var i;
    options_list.forEach(function(opt, i, arr){
      
       if(poll_method == 'list'){
	VSchemas.OptionList.findById(opt, function(err, option){
	  if(err || !option){
	 //   console.log(err.message);
	    callback(err);
	  }
	  else if(i === arr.length-1){
	    
	    //list.splice(i, 1, option.toJSON());
	    callback(null, list);
	    
	   //   console.log(list);
	    //console.log(list);
	  }
	  else{
	    list.push(option.toJSON());
	  }
	});
    }
    else if(poll_method == 'like-dislike'){
	VSchemas.OptionLikeDislike.findById(opt, function(err, option){
	  if(err || !option){
	//    console.log(err.message);
	    callback(err);
	  }
	  else if(i === arr.length -1){
	    //list.splice(i, 1, option.toJSON());
	    callback(null, list);
	    
	   //   console.log(list);
	    //console.log(list);
	  }
	  else{
	    list.push(option.toJSON());
	  }
	});
    }
    else if(poll_method == 'stars'){
	VSchemas.OptionStar.findById(opt, function(err, option){
	  if(err || !option){
	   // console.log(err.message);
	    callback(err);
	  }
	  else if(i === arr.length-1){
	    //list.splice(i, 1, option.toJSON());
	    callback(null, list);
	    
	   //   console.log(list);
	    //console.log(list);
	  }
	  else{
	    list.push(option.toJSON());
	  }
	});
    }
          /*console.log('i = ', i);
      if(i == arr.length - 1){
	//list.length = i+1;
	console.log(list);
	
	callback(null, list);
	
      }*/

    });
    //list.length = i;
};

getPostsByAuthor = function(author, callback) {
   var result = [];
    VSchemas.Post.find({"who": author}, function(err, posts){
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
				 var list = new Array(); 
				 getOptions(list, poll.options_list, poll.poll_method, function(err, options){
					
				    makeJSON(post, poll, options, function(generated) {
					// console.log('JSON geerated: \n', generated); 
					result.push(generated);
					 if(index == array.length-1)
				  callback(null, result);
                        });
				    //list.length = 0;
				  });
				/*if(index == array.length-1)
				  callback(null, result);*/
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
				 var list = new Array(); 
				 getOptions(list, poll.options_list, poll.poll_method, function(err, options){
					
				    makeJSON(post, poll, options, function(generated) {
					// console.log('JSON geerated: \n', generated); 
					result.push(generated);
					 if(index == array.length-1)
				  callback(null, result);
                        });
				    //list.length = 0;
				  });
				/*if(index == array.length-1)
				  callback(null, result);*/
                    }
                }
            });
        });
			  }
		       }
    });
};
