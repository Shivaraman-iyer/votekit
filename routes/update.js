app.put('/api/poll/:id', function(req, res){
   console.log('You want to update: \n', req.params.id);
  updatePostById(req.params.id, req.body, function(err){
   
    if(err){
            console.log(err.message);
           // res.redirect('/');TODO needed?
	    
        }
        else{
            //console.log(numAffected, ' docs were updated.\n');
          //  res.redirect('/');TODO needed?
        }
        });
});