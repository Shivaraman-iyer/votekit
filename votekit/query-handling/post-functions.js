// create a post + content pair from the received object
function createPost(object, callback) {
  //console.log('creating: ', object); 
    post = new VSchemas.Post();
    poll = new VSchemas.Poll();
    
    
    poll.create(object.poll, function(err) {  if(err) callback(err);  else {
    //create options objects also
    
      // change the value of object.poll to the ID of the content object, because that is what the schema wants
        object.poll = poll._id;
	        
	// create a post from the original object
        
	post.create(object, function(err) { if(err) callback(err);  else {
	
          
	  callback(null, post, poll);
        }});
    }});
};

function savePost(post, poll, callback) {
    // save content first
    console.log('POST: ', post);
    console.log('POLL: ', poll);
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
  createPost(object, function(err, post, poll) {   if(err) callback(err);  else {
        savePost(post, poll, function(err, postId) { if(err) callback(err);  else {
          callback(null, postId);
                }});
    }});
};

