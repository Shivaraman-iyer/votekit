/*
 * returns a list of all polls
 */
app.get('/api/poll', function(req, res){
    getAllPosts(function(err, posts){
      if(err)
	res.send(err.message);
      else
	res.send(posts);
    });
  
   });
 
/*
 * Returns the poll with the given id
 */
app.get('/api/poll/get_poll_by_id/:id', function(req, res){
  getPostById(req.params.id, function(err, post){
      if(err)
	res.send(err.message);
      	else
	  res.send(post);
	});
  
    });

/*
 * Returns the polls created by the author 
 * with given id
 */
app.get('/api/poll/get_poll_by_author/:who', function(req, res){
  getPostsByAuthor(req.params.who, function(err, post){
    if(err) 
      res.send(err.message);//TODO correct error message?
      else 
	res.send(post);
  });
  
});