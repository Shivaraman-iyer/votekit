app.post('/api/poll', function(req, res){
    //Create an object which reads data from req
//    var poll = {
  //      poll_issue: req.body.poll_issue//How is poll issue passed in req?
   // };
  //  console.log('Data rcvd: ', req.body);    
    //Publish this poll

        publish(req.body, function(err, pollId){
        if(err){
            console.log(err.message);
            res.redirect('/');
        }
        else{
            console.log('poll saved');
            post._id = pollId;
            res.redirect('/');
        }
        });
});

     
