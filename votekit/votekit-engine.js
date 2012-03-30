VSchemas = require('./votekit-schemas');

require('./poll-functions.js');
require('./schemas/poll.js');
require('./schemas/post.js');
 
module.exports.connect = function(server, db, callback) {
    mongoose.connect('mongodb://' + server + '/' + db, callback);
    
}


module.exports.disconnect = function() {
    mongoose.disconnect();
}
 module.exports.publishPoll = publish;
 module.exports.getPostById = getPostById;
 module.exports.getAllPosts = getAllPosts;
 module.exports.getPostsByAuthor = getPostsByAuthor;
 
