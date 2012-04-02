deletePostById = function(id, callback){
  VSchemas.Post.find( { _id : id}, function(err,docs){
  if (err) return console.log(err);
  if (!docs || !Array.isArray(docs) || docs.length === 0) 
    return console.log('no docs found');
  docs.forEach( function (doc) {
    doc.remove();
  });
});

  
};