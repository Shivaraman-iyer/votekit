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

getRecentPolls = function(author, x, callback){
  var results = [];
  var obj;
  VSchemas.Post.find({"who":author}).sort(Date.now, -1).limit(x).run(function(err, posts){
    if(err){
      console.log(posts);
      callback(err);
    }
    else{
      posts.forEach(function(post, index, array){
	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      
	      console.log(err.message);
	      callback(err);}
	      else {
			  //obj = posts[i];

		//console.log(poll.options_list);
		getOptions(poll.options_list, poll.poll_method, function(err, options){
		  makeJSON(post, poll, options, function(result) {
	//	    callback(null, result);
		  results.push(result);
		    
                });
		  
		});
		
		//console.log('options_list: \n', options_list);     
		//send options_list in makeJSOn too
                
            }
	});
      });
     callback(null, results);
    }
  });
};