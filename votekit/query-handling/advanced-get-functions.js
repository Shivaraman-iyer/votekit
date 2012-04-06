//require('./utils.js');
function makeJSON(post, poll, options_list, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    result.poll.options_list = options_list;
    
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}

getRecentPolls = function(author, x, callback){
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
				 var list = new Array(); 
				 getOptions(list, poll.options_list, poll.poll_method, function(err, options){
					
				    makeJSON(post, poll, options, function(generated) {
					result.push(generated);
					 if(index == array.length-1)
				  callback(null, result);
                        });
				    
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