app.delete('/api/poll/:id', function(req, res){
  console.log('In delete post');
  deletePostById(req.params.id, function(err){
    if(err)
      res.send(err.message);
    else
      console.log('Post deleted. :', req.params.id);
  });
});