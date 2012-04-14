deletePostById = function(id, callback){
  VSchemas.Post.find( { _id : id}, function(err,docs){
  if (err) callback(err);
  if (!docs || !Array.isArray(docs) || docs.length === 0) 
    callback(new Error('No matching documents found.'));
  if(Array.isArray(docs))
  docs.forEach( function (doc) {
    console.log('Matching doc found:\n',doc);
    doc.remove();
  });
  if(!Array.isArray(docs))
    docs.remove();
});

  
};