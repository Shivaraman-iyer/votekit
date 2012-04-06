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

/*
 * Returns latest x  number of polls from the database
 * created by given author
 */
app.get('/api/poll/get_recent_polls_by_author/:author/:x', function(req, res){
  
  
  getRecentPollsOfAuthor(req.params.author, req.params.x, function(err, posts){
    if(err)
      res.send(err.message);
    else
      res.send(posts);
  });
  
});

/*
 * Returns latest x polls updated 
 */
app.get('/api/poll/get_recent_polls_by_date/:x', function(req, res){
  getRecentPollsByDate(req.params.x, function(err, posts){
    if(err)
      res.send(err.message);
    else{
      res.send(posts);
    }
  });
  
});
