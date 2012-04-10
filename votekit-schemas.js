mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    ObjectId = mongoose.Types.ObjectId;
    
//Load schema models

require('./schemas/poll.js');
require('./schemas/post.js');
require('./schemas/options.js');

module.exports.Post = mongoose.model('post');
module.exports.Poll = mongoose.model('poll');
module.exports.OptionLikeDislike = mongoose.model('optionLikeDislike');
module.exports.OptionList = mongoose.model('optionList');
module.exports.OptionStar = mongoose.model('optionStar');


//requir(e'./poll-functions.js');
module.exports.model = function(modelname) {
     return mongoose.model(modelname);
 }

//module.exports.Post = mongoose.model('post');
//module.exports.Poll = mongoose.model('poll');

/*module.exports.model = function(modelName) {
    return mongoose.model(modelName);
}*/
