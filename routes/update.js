/*
 * Put data in this format to add votes
 * {
 * choice: 'like' or 'dislike'
 * content: e.g football or an image id,
 * id: <>//Id of chooser
 * }
 */
app.post('/api/poll/update/like/1/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.0.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/2/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.1.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});


app.post('/api/poll/update/like/3/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.2.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/4/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.3.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/5/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.4.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/6/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.5.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/7/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.6.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/8/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.7.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/9/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.8.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/like/10/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.9.who_likes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});

app.post('/api/poll/update/dislike/1/:id', function(req, res){
  console.log('posting');
  VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.0.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/2/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.1.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});

app.post('/api/poll/update/dislike/3/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.2.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/4/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.3.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/5/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.4.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/6/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.5.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/7/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.6.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/8/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.7.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/9/:id', function(req, res){
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.8.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
});
});
app.post('/api/poll/update/dislike/10/:id', function(req, res){
  console.log('posting');
   VSchemas.Post.findById(req.params.id, function( err, post){
    VSchemas.Poll.update({_id:post.poll}, {$push: {'options_list.9.who_dislikes':req.body.id}}, {upsert:true}, function(err, numAffected){
  if(err){
    console.log(err.message);
    //callback(err);
  }
  else{
    console.log(numAffected, ' document(s) updated');
    res.send();
  }
});
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
