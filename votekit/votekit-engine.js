VSchemas = require('./votekit-schemas');

require('./query-handling/basic-get-functions.js');
require('./query-handling/advanced-get-functions.js');
require('./query-handling/post-functions.js');
require('./query-handling/put-functions.js');
require('./query-handling/delete-functions.js');
require('./query-handling/utils.js');

 
module.exports.connect = function(server, db, callback) {
    mongoose.connect('mongodb://' + server + '/' + db, callback);
    
}


module.exports.disconnect = function() {
    mongoose.disconnect();
}
//GET
module.exports.getPostById = getPostById;
module.exports.getOptions = getOptions;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostsByAuthor = getPostsByAuthor;
module.exports.getRecentPollsOfAuthor = getRecentPollsOfAuthor; 
module.exports.getRecentPollsByDate = getRecentPollsByDate; 
//POST 
module.exports.publishPoll = publish;

//PUT
module.exports.updatePostById = updatePostById;
//DELETE
module.exports.deletPostById = deletePostById;
 
