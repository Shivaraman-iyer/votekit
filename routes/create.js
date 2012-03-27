app.post('/api/poll', function(req, res){
    //Create an object which reads data from req
//    var poll = {
  //      poll_issue: req.body.poll_issue//How is poll issue passed in req?
   // };
    console.log("reached create.js");
    
    //Publish this poll

    //TODO: Will this var 'votekit' be defined in the app using this api always?
/*    votekit.publishPoll(poll, function(err, pollId){
        if(err){
            console.log(err.message);
            res.redirect('/');
        }
        else{
            poll._id = pollId;
            res.redirect('/');
        }
        });*/

    }); 
