app.get('/api/poll', function(req, res){
    var sample_post = new VSchemas.Post();
    sample_post = {
    who : 'aakriti',
    visibility : 'public'
    };
    res.send(JSON.stringify(sample_post));
   });

app.get('/api/poll/:id', function(req, res){
  res.send('Poll with given id is:');
    console.log(getPost(req._id));
    });
