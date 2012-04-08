function trim(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	//console.log(s);
	return s;
}
////For adding comments

////For adding votes
updatePostById = function(id, obj, callback){
  VSchemas.Post.findById(id, function(err, post) { 
      if(err) {
	console.log(err.message);
	callback(err); }
      else {
	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      console.log(err.message);
	      callback(err);}
	      else {
		if(obj.tags != undefined && obj.tags.length > 0){
		  for(var i = 0; i < obj.tags.length; i++)
		    poll.tags.push(obj.tags[i]);
		  poll.save(function(err){
		    if(err)
		      callback(err);
		  });
		}
		if(obj.option_num != undefined){
		if(poll.poll_method === 'list')
		  addVoteToList(poll, obj, function(err){if(err)callback(err)});
		else if(poll.poll_method === 'stars')
		  addStar(poll, obj, function(err){if(err)callback(err)});
		else if(poll.poll_method === 'like-dislike')
		  addLikeDislike(poll, obj, function(err){if(err)callback(err)});
		}
	      }
	});
      }});
};

addStar = function(poll, obj, callback){
VSchemas.OptionStar.findById(poll.options_list[obj.option_num - 1], function(err, option){
		 // console.log(option._id);
		 //TODO this is horrible
		 if(obj.stars_num == 1)
		    option.whoChose1.push(obj.id);
		 else if(obj.stars_num == 1)
		    option.whoChose2.push(obj.id);
		 else if(obj.stars_num == 1)
		    option.whoChose3.push(obj.id);
		 else if(obj.stars_num == 1)
		    option.whoChose4.push(obj.id);
		 else if(obj.stars_num == 1)
		    option.whoChose5.push(obj.id);
		 
		  
		  //console.log(option.choosers);
		  option.save(function(err){
		    if(err){
		      console.log(err);
		      callback(err);
		    }
		    
		  });
		});
		//console.log('options_list: \n', options_list);     
		//send options_list in makeJSOn too
                
};

addVoteToList = function(poll, obj, callback){
  VSchemas.OptionList.findById(poll.options_list[obj.option_num - 1], function(err, option){
	console.log(option);	 
	option.choosers.push(obj.id);
		  
		  //console.log(option.choosers);
		  option.save(function(err){
		    if(err){
		      console.log(err);
		      callback(err);
		    }
		    
		  });
		});

  
};

addLikeDislike = function(poll, obj, callback){
  VSchemas.OptionLikeDislike.findById(poll.options_list[obj.option_num - 1], function(err, option){
		if(obj.choice === 'like')
		  option.who_likes.push(obj.id);
		else if(obj.choice === 'dislike')
		  option.who_dislikes.push(obj.id);  
		  console.log(option.who_likes, option.who_likes);
		  option.save(function(err){
		    if(err){
		      console.log(err);
		      callback(err);
		    }
		    
		  });
		});

};
/*updatePostById = function(id, objNew, callback){
 //TODO error while finding post by id
  id = trim(id);
  VSchemas.Post.findById(id, function(err, post){
    //update post
    updatePost(post, objNew, function(err, result){
	  if(err){
	    console.log(err.message);
	    callback(err);
	  }
	  else{
	    result.save(function(err){
	      if(err)
	      {
		console.log(err);
		callback(err);
	      }
	    });
	  }
	});
    //update poll
    VSchemas.Poll.findById(post.poll, function(err, poll){
      if(objNew.poll)
	updatePoll(poll, objNew.poll, function(err, result){
	  if(err){
	    console.log(err.message);
	    callback(err);
	  }
	  else{
	    result.save(function(err){
	      if(err)
	      {
		console.log(err);
		callback(err);
	      }
	    });
	  }
	});
    
    //update options
    getOptions(poll.options_list, function(err, options){
      updateOptions(options, objNew.poll.options_list, function(err, result){
	if(err){
	 console.log(err);
	 callback(err);
	}
	else{
	   var i;
	   for(i = 0; i < poll.options_list.length; i++){
	      result[i].save(function(err){
		if(err)
		  console.log(err);
	    
	  });
	
	}
	}
      }
      );
    });
    });
  });
  
updatePost = function(post, objNew, callback){
  //TODO updated modification time
   if(objNew.who != undefined)
     post.who = objNew.who;
   
   if(objNew.expiry_date != undefined)
     post.expiry_date = objNew.expiry_date;
   
   if(objNew.visibility != undefined)
     post.visibility = objNew.visibility;
   
   console.log('Updated post: \n', post);
   callback(null, post); 
   
};
updatePoll = function(poll, objNew, callback){
  
};

updateOptions = function(options, objNew_list, callback){
  
};
  /*VSchemas.Post.update({ _id:id}, {who: "aakriti"}, {upsert:false}, function(err){
   // console.log(id);
   if(err){
     console.log('when finding post by id, before updating: ', err.message);
     callback(err);
   }
   else{ 
     VSchemas.Post.findById(id, function(err, post){
       if(err)
       {
	 console.log('when finding post by id, after updating: ', err.message);
	 callback(err);
       }
       else
       {
       VSchemas.Poll.update({ _id : post.poll}, objNew.poll, /*upsert false, function(err){
	     if(err){
	       console.log('when finding poll by id: ', err.message);
	      callback(err);
	     }
	    else
	      callback(null); 
    });}
     });
     ;
     }
    
  });
  };*/
