app.post('/api/poll', function(req, res){
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

     
