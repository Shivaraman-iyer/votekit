app.get('/api/poll', function(req, res){
    res.send('List of polls:');

   });

app.get('/api/poll/:id', function(req, res){
  res.send('Poll with given id is:');
    console.log(getPost(req._id));
    });
