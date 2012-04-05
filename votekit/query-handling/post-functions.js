// create a post + content pair from the received object
function createPost(object, callback) {
  //console.log('creating: ', object); 
    post = new VSchemas.Post();
    poll = new VSchemas.Poll();
    var options_obj = [];
    var i;
    
   // console.log('Number of options sent is = ', object.poll.options_list.length);
    
    for(i = 0; i < object.poll.options_list.length; i++){
	if(object.poll.poll_method === 'stars'){
	  optionStar = new VSchemas.OptionStar();
	optionStar.create(object.poll.options_list[i], function(err) {
	  if(err)
	    callback(err);
	  else
	    object.poll.options_list[i] = optionStar._id;
	  
	});
	options_obj[i] = optionStar;
	}
	else if(object.poll.poll_method === 'list'){
	  optionList = new VSchemas.OptionList();
	  optionList.create(object.poll.options_list[i], function(err) {
	    if(err)
	      callback(err);
	    else
	      object.poll.options_list[i] = optionList._id;
	  
	});
	  options_obj[i] = optionList;
	}
	  else if(object.poll.poll_method === 'like-dislike'){
	   optionLikeDislike = new VSchemas.OptionLikeDislike();
	optionLikeDislike.create(object.poll.options_list[i], function(err) {
	  if(err)
	    callback(err);
	  else
	    object.poll.options_list[i] = optionLikeDislike._id;
	  
	});
	options_obj[i] = optionLikeDislike;
	  }
    }
    
    poll.create(object.poll, function(err) {  if(err) callback(err);  else {
    //create options objects also
    
      // change the value of object.poll to the ID of the content object, because that is what the schema wants
        object.poll = poll._id;
	        
	// create a post from the original object
        
	post.create(object, function(err) { if(err) callback(err);  else {
	
          
	  callback(null, post, poll, options_obj);
        }});
    }});//end of poll.creat
};

function savePost(post, poll, options_obj, callback) {
    // save content first
    console.log('\nPOST: ', post);
    console.log('\nPOLL: ', poll);
    console.log('\nOPTIONS: ', options_obj);
    var i;
        
    for(i = 0; i < poll.options_list.length; i++){
	
	  options_obj[i].save(function(err){
	    if(err)
	      console.log(err);
	    
	  });
	
	}
    
    poll.save( function(err) {   
      if(err) { console.log(err);  }  
      else {
        // save post next
        console.log('savePost: poll.save done');
        post.save( function(err) {
            // if could not save post, get content out of system
            if(err) poll.remove( function() { callback(err); });
            else {
	      console.log('savePost: post.save done');
                // return successfully created post's ID for great good
                callback(null, post._id);
            }
        });
    }});
};

publish = function publishPost(object, callback) {
  //console.log('publishing: ', object); 
  createPost(object, function(err, post, poll, options_obj) {   if(err) callback(err);  else {
        savePost(post, poll, options_obj, function(err, postId) { if(err) callback(err);  else {
          callback(null, postId);
                }});
    }});
};

