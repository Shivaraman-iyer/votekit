/*
 * Put data in this format to add votes
 * {
 * choice: 'like' or 'dislike'
 * content: e.g football or an image id,
 * id: <>//Id of chooser
 * }
 */
app.post('/api/poll/update/:id', function(req, res){
 //  console.log('You want to update: \n', req.params.id);
   //console.log('New data: ', req.body);
   if(req.body.choice === 'like')
  updatePostById_likes(req.params.id, req.body, function(err, numAffected){
   
    if(err){
          console.log(err.message);
          callback(err);    
        }
        else{
            console.log(numAffected, ' docs updated.\n');
	    
        }
        });

else
  updatePostById_dislikes(req.params.id, req.body, function(err, numAffected){
   
    if(err){
      
            console.log(err.message);
	    callback(err);
    }
        else{
            console.log(numAffected, ' docs updated.\n');

        }
        });
});

app.post('/api/poll/expire/:id', function(req, res){
  if(req.body.expiry_date != undefined)
    updateExpiryDate(req.params.id, req.body, function(err, numAffected){
    if(err){
            console.log(err.message);
         callback(err);	    
        }
        else
            console.log(numAffected, ' docs updated.\n');
          
    });
  });
