PollSchema = new Schema({
    /* This is the poll question,
       the user may or may not state a poll question.*/
    title: {
        type: String
        },
    /* The content type of the topic/description
       Should be chosen out of {text, image, code}
       */
    des_content_type: {
        type: String, 
	enum:['text', 'img'],//TODO:code to be added later
        default: 'text', 
        required: true
        },
    /* Main content of the poll topic/option
       Will be a string containing the text,
       or the id of the image.
       */
    description: {
        type: String, 
        default: '', 
        required: true
        },
    /* List of tags, optional
       TO-DO: Have ids for tags*/
    tags: [{ 
        type: String 
        }], 
    /* To determine whether comments are enabled on this poll*/
    comments_enabled: { 
        type: Boolean, 
        default: false,
        
        },
    /* List of comments*/
    comments_list: [{ 
        when: { 
            type: Date, 
            default: Date.now(), 
            required: true 
            },
        who: {
            type: String
            },
        comment: { 
            type: String 
            }
        }],
    /* Whether the options are in terms of star rating, like/dislike
       or simple options.
       Choose from: 'stars', 'like-dislike', 'list'
       TO-DO: Multiple votes?*/
    poll_method: {
        type: String,
	enum: ['list', 'like-dislike', 'stars'],
        default: 'list',
        required: true
        },
    /*Whether they are plain text, links, or image ids
     * Corresponding values: 'text', 'link', 'image'
     */
    options_type: {
        type: String, 
        enum: ['text', 'link', 'image'],
        default: 'text',
        required: true
    },
      
    /* List of options
       */
    options_list: [{ 
       content: {
            type: String,
            required: true
	  
        },
	who_likes :[ {
                type: String,
                required: true,
		unique:true
            }],
	who_dislikes :[ {
                type: String,
                required: true,
		unique:true
            }] }]
});

PollSchema.methods.create = function create(object, callback) {
 console.log('PollSchema rcvd object: \n', object);
    if(!object.des_content_type)
      callback(new Error("PollSchema.methods.create: Bad arguments, des_content_type", object.des_content_type));
      else if(!object.options_type)
	callback(new Error("PollSchema.methods.create: Bad arguments, options_type", object.options_type));
	else if(!object.description)
	  callback(new Error("PollSchema.methods.create: Bad arguments, decription", object.description));
	else if(!object.poll_method)
	  callback(new Error("PollSchema.methods.create: Bad arguments, poll_metho", object.poll_method));
	else if(object.options_list.length < 1) 
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    callback(new Error("PollSchema.methods.create: Bad arguments, options list", object.option_list.length));
    
    else {
      
    if(object.title != undefined)
      this.title = object.title;
   
    this.des_content_type = object.des_content_type;
    
    this.description = object.description;
        
    
    if(object.tags != undefined && object.tags.length > 0)
      this.tags = object.tags.slice();
    
    this.comments_enabled = object.comments_enabled;
    
    if(object.comments_enabled && object.comments_list != undefined && object.comments_list.length > 0)
      this.comments_list = object.comments_list.slice();
    
    this.poll_method = object.poll_method;
    this.options_type = object.options_type;
    
    if(object.options_list != undefined && object.options_list.length > 0)
    {this.options_list = object.options_list.slice();
      this.options_list.forEach(function(option, i, arr){
	console.log(option);
	option.who_likes = [];
	option.who_dislikes = [];
      });
    }
    
    
        callback(null);
    }
};

mongoose.model('poll', PollSchema, 'poll');