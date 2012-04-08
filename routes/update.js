/*
 * Put data in this format to add votes
 * {
 * option_num: <>
 * stars_num: <> //If the schema has star rating
 * choice: 'like' or 'dislike'
 * tags: <array of tags>,
 * id: <>//Id of chooser
 * }
 */
app.post('/api/poll/update/:id', function(req, res){
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