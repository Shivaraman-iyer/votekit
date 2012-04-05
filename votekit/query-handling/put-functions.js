updatePostById = function(id, objNew, callback){
 //TODO error while finding post by id
  VSchemas.Post.update({ _id:id}, {'$set': {who: "aakriti"}}, {upsert:true}, function(err){
    console.log('id: ', id);
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
       VSchemas.Poll.update({ _id : post.poll}, objNew.poll, /*upsert*/ false, function(err){
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
  };
