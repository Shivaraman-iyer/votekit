app.post('/api/poll', function(req, res){
  console.log('user posted: \n', req.body);
    publish(req.body, function(err, pollId){
        if(err){
            console.log(err.message);
            res.redirect('/');
        }
        else{
            console.log('poll saved');
            post._id = pollId;
	  //  res.send(pollId);
            res.redirect('/');
	    
	//    res.send({pollid:pollId});
	    
	   
        }
        });
});

     
