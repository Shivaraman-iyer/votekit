/*
 * returns a list of all polls
 */
app.get('/api/poll', function(req, res){
    
  
   });
 
/*
 * Returns the poll with the given id
 */
app.get('/api/poll/get_poll_by_id/:id', function(req, res){
  getPostById(req.params.id, function(err, post){
      if(err)
	console.log('Error');//TODOwrite correct error code
	else
	  res.send(post);
  });
    });

/*
 * Returns the polls created by the author 
 * with given id
 */
app.get('/api/poll/get_poll_by_author/:who', function(req, res){
  getPostByAuthor(req.params.who, function(err, post){
    if(err) 
      res.send('Error');//TODO correct error message?
      else 
	res.send(post);
  });
  
});