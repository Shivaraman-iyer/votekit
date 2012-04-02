app.put('/api/poll/:id', function(req, res){
   
  updatePostById(req.params.id, req.body, function(err, numAffected){
   
    if(err){
            console.log(err.message);
           // res.redirect('/');TODO needed?
	    
        }
        else{
            console.log(numAffected, ' docs were updated.\n');
          //  res.redirect('/');TODO needed?
        }
        });
});