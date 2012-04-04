OptionStarSchema = new Schema({
        content: {
            type: String,
            required: true
        },
        choosers: [{//there will be 5 elements in this array of choosers for every poll that wants star ratings
            numOfStars : {
                type: Number,
		min : 1,
		max: 5,
                required: true
            },
            whoChose: [ {
                type: String,//stores id of users who 'numOfStars' for this option
                required: true
            }]
        
        }]    
});

OptionLikeDislikeSchema = new Schema({
	content: {
            type: String,
            required: true
        },
	who_likes :[ {
                type: String,
                required: true
            }],
	who_dislikes :[ {
                type: String,
                required: true
            }]
});

OptionListSchema = new Schema({
     content: {
            type: String,
            required: true
        },
     choosers:[{
                type: String,//stores id of users who 'numOfStars' for this option
                required: true
            }]
});

OptionLikeDislikeSchema.methods.create = function create(object, callback) {
 console.log('OptionLikeDislikeSchema rcvd object: \n', object);
    if(!object.content)
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("OptionLikeDislikeSchema.methods.create: Bad arguments");
    
    else {
        if(object.content != undefined)
	  this.content = object.content;
	
	if(object.who_likes != undefined && object.who_likes.length > 0)
	  this.who_likes = object.who_likes.slice();
        
	callback(null);
    }
};

OptionListSchema.methods.create = function create(object, callback){
  console.log('OptionListSchema rcvd object: \n', object);   
  if(!object.content)
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("OptionListSchema.methods.create: Bad arguments");
    
    else {
        if(object.content != undefined)
	  this.content = object.content;
	
	if(object.choosers != undefined && object.choosers.length > 0)
	  this.choosers = object.choosers.slice();
        
        callback(null);
    }
};

OptionStarSchema.methods.create = function create(object, callback){
  console.log('OptionStarSchema rcvd object: \n', object);   
  if(!object.content)
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("OptionStarSchema.methods.create: Bad arguments");
    
    else {
        if(object.content != undefined)
	  this.content = object.content;
	
        callback(null);
    }
};

mongoose.model('optionStar', OptionStarSchema, 'optionStar');
mongoose.model('optionLikeDislike', OptionLikeDislikeSchema, 'optionLikeDislike');
mongoose.model('optionList', OptionListSchema, 'optionList');