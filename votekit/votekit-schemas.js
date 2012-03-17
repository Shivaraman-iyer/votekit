mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    ObjectId = mongoose.ObjectId;

//Load schema models
require('./schemas/poll.js');
require('./schemas/post.js');

module.exports.Post = mongoose.model('post');

module.exports.model = function(modelName) {
    return mongoose.model(modelName);
}
