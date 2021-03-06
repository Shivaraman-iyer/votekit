function trim(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	//console.log(s);
	return s;
}
updateExpiryDate = function(postId, objNew, callback){
  VSchemas.Post.update({_id:postId},{$set:{'expiry_date':objNew.expiry_date}}, {upsert: false}, function( err, numAffected){
   if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  } 
});
};
updatePostById_likes = function(postId, objNew, callback){
  if(objNew.option_num == 1)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.0.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 2)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.1.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 3)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.2.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 4)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.3.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 5)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.4.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 6)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.5.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 7)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.6.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 8)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.7.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 9)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.8.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 10)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.9.who_likes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  
  
};
updatePostById_dislikes = function(postId, objNew, callback){
  if(objNew.option_num == 1)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.0.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 2)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.1.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 3)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.2.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 4)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.3.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 5)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.4.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 6)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.5.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 7)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.6.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 8)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.7.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 9)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.8.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  else
    if(objNew.option_num == 10)
  VSchemas.Post.findById(postId, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.9.who_dislikes':objNew.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
});
  
};

/*
updatePostById = function(postId, objNew, callback){
  
   VSchemas.Post.findById(postId, function(err, post) { 
      if(err) {
	console.log(err);
	callback(err);
	
      }
	else if(!post){
	  console.log('Post not found!');
	  callback(new Error('Post not found!'));
	}
      else if(post){
	VSchemas.Poll.findById(post.poll, function(err, poll){
	  poll.options_list[objNew.option_num - 1].who_likes.push(objNew.id);
	  poll.save(function(err){
	    if(err)
	      callback(err);
	    else
	      callback(null, 1);
	  });
	});
      }
   });
};*/
/*	console.log(post.poll);
VSchemas.Poll.update({_id:post.poll }, {$inc : objNew}, {upsert: false}, function(err, numAffected){
  if(err){
    console.log(err.message);
    callback(err);
  }
  else{
    console.log(numAffected);
    callback(null, numAffected);
  }
});
		      }
	});
      
   };
   
//};
////For adding comments
/*
updatePostById = function(postId, objNew, callback){
  
   VSchemas.Post.findById(postId, function(err, post) { 
      if(err) {
	console.log(err);
	callback(err); }
	else if(!post){
	  console.log('Post not found!');
	  callback(new Error('Post not found!'));
	}
      else if(post){

	VSchemas.Poll.findById(post.poll, function(err, poll) {
            if(err) {
	      console.log(err.message);
	      callback(err);}
	      else {

		    update(poll, objNew, function(err){
		      if(err){
			console.log(err.message);
			callback(err);}
		      else
			console.log("Updated!");
		    });
	
    }//end of else
  });
      }
   });
};
update = function(poll, obj, callback){
 
  poll.options_list[obj.option_num-1].who_likes.push(obj.id, function(err){
   
    if(err)
    {console.log(err.message);
      callback(err);
    }
    else{

      poll.save(function(err){
	if(err){
	  console.log(err.message);
	  callback(err);
	}
	else callback(null);
      });
  }
  });
  
};
////For adding votes
/*
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
		    poll.tags.push(obj.tags[i]);}//end of for
		    
		    if(obj.option_num != undefined){
		      console.log('option: \n', poll.options_list[obj.option_num - 1]);
		    if(obj.choice === 'like')
		      poll.options_list[obj.option_num - 1].who_likes.push(obj.id);
		    else if(obj.choice === 'dislike')
		      poll.options_list[obj.option_num -1].who_dislikes.push(obj.id);
		    }
		  poll.save(function(err){
		    if(err){
		      console.log(err.message);
		      callback(err);}
		  });//end of save
		}//end of else
		
		if(obj.option_num != undefined){
		if(poll.poll_method === 'list')
		  addVoteToList(poll, obj, function(err){if(err)callback(err)});
		else if(poll.poll_method === 'stars')
		  addStar(poll, obj, function(err){if(err)callback(err)});
		else if(poll.poll_method === 'like-dislike')
		  addLikeDislike(poll, obj, function(err){if(err)callback(err)});
		}
	      });//end of func
	}});
      
};*/

/*addStar = function(poll, obj, callback){
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
  /*VSchemas.Post.update({ _id:id}, {who: "aakriti"}, {upsert:true}, function(err){
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

  