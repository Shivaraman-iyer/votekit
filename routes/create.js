app.post('/api/poll', function(req, res){
    //Create an object which reads data from req
//    var poll = {
  //      poll_issue: req.body.poll_issue//How is poll issue passed in req?
   // };
    var post = req.body.post;
    console.log("data to post rcvd: ", req.body);
    
    //Publish this poll

    //TODO: Will this var 'votekit' be defined in the app using this api alwaysshi?
/*    votekit.publishPoll(post, function(err, pollId){
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
*/
    }); 
