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
        required: true
        }]
});

Poll.Schema.methods.create = function create(object, callback) {
 console.log('Poll data sent by user: \n', object);
    if(!object.content_type || !object.option_type ||  !object.content)//!object.comments_enabled ||
        //callback(new Error("PollSchema.methods.create: Bad arguments"));TODO Error class?
    console.log("PollSchema.methods.create: Bad arguments");
    
    else {
        // date will be generated upon actual object creation, not client-side
        if(object.what != undefined)
      this.what = object.what;
    if(object.title != undefined)
      this.title = object.title;
    
        this.content = object.content;
        this.content_type = object.content_type;
    
    if(object.tags != undefined)
      this.tags = object.tags;
    
    this.comments_enabled = object.comments_enabled;
    if(object.comments != undefined)
      this.comments = object.comments;
    
    this.option_type = object.option_type;
    if(object.options != undefined)
      this.options = object.options;
    
    this.content_type = object.content_type;
        this.content = object.content;
        callback(null);
    }
};

mongoose.model('poll', PollSchema, 'poll');