VSchemas = require('./votekit-schemas');
//VSchemas = require('./poll-functions');

module.exports.connect = function(server, db, callback) {
   mongoose.connect('mongodb://' + server + '/' + db, callback);
}
 
module.exports.disconnect = function() {
   mongoose.disconnect();
}
 
 module.exports.publishPoll = publish;
 module.exports.getPoll = getPoll;
