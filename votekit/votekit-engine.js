VSchemas = require('./votekit-schemas');
require('./poll-functions.js');

module.exports.connect = function(server, db, callback) {
   mongoose.connect('mongodb://' + server + '/' + db, callback);
}
 
module.exports.disconnect = function() {
   mongoose.disconnect();
}
 
 module.exports.publishPoll = publish;
 module.exports.getPost = getPost;
 module.exports.getTest = getTest;
