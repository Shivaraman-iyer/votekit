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
        required: true 
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
     * Corresponding values: 'text', 'link', 'img'
     */
    options_type: {
        type: String, 
        enum: ['text', 'link', 'img'],
        default: 'text',
        required: true
    },
      
    /* List of options
       */
    options_list: [{ 
        type: Schema.ObjectId,
	unique: true,
        required: true
        }]
});

PollSchema.methods.create = function create(object, callback) {
 console.log('Poll data sent by user: \n', object);
    if(!object.des_content_type || !object.options_type ||  !object.description || !object.comments_enabled || !object.poll_method) 
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("PollSchema.methods.create: Bad arguments");
    
    else {
      
    if(object.title != undefined)
      this.title = object.title;
   
    this.des_content_type = object.des_content_type;
    
    this.description = object.description;
        
    
    if(object.tags != undefined && object.tags.length > 0)
      this.tags = object.tags.slice();
    
    this.comments_enabled = object.comments_enabled;
    
    if(object.comments_list != undefined && object.comments_list.length > 0)
      this.comments_list = object.comments_list.slice();
    
    this.poll_method = object.poll_method;
    this.options_type = object.options_type;
    
    if(object.options_list != undefined && object.options_list.length > 0)
      this.options_list = object.options_list.slice();
    
    
        callback(null);
    }
};

mongoose.model('poll', PollSchema, 'poll');