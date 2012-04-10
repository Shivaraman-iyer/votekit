deletePostById = function(id, callback){
  VSchemas.Post.find( { _id : id}, function(err,docs){
  if (err) callback(err);
  if (!docs || !Array.isArray(docs) || docs.length === 0) 
    callback(new Error('No matching documents found.'));
  docs.forEach( function (doc) {
    console.log(doc);
    doc.remove();
  });
});

  
};