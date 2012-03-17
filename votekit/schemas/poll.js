PollSchema = new Schema({
    when: {
        type: Date, 
        default: Date(), //?
        required: true
        },
    /*Whether this is an option, option to options,
      or a poll alone.*/
      what: {
          type: String, enum: ['poll', 'option', 'op2op']
      },
    /* This is the poll question,
       the user may or may not state a poll question.*/
    title: {
        type: String
        },
    /* The content type of the topic/description
       Should be chosen out of {text, image, code}
       For a poll should be text. Could vary for an option*/
    content_type: {
        type: String, 
        default: 'text', 
        required: true
        },
    /* Main content of the poll topic/option
       TO-DO: Implementation here only for text content.
               need to write a function to return content 
               type according to value of 'content_type*/
    content: {
        type: String, 
        default: '', 
        required: true
        },
    /* List of tags, optional
       TO-DO: Have ids for tags?*/
    tags: [{ 
        type: String 
        }], 
    /* To determine whether comments are enabled on this option/poll*/
    comments_enabled: { 
        type: Boolean, 
        default: false, 
        required: true 
        },
    /* List of comments*/
    comments: [{ 
        when: { 
            type: Date, 
            default: Date.now(), 
            required: true 
            },
        who: {
            type: Schema.ObjectId 
            },
        content: { 
            type: String 
            }
        }],
    /* Whether the options are in terms of star rating, like/dislike
       or simple options.
       Choose from: 'stars', 'like', 'like-dislike', 'list'
       TO-DO: Multiple votes?*/
    option_type: {
        type: String,
        default: 'list',
        required: true
        },
    /* List of options
       These will be poll objects*/
    options: [{ 
        type: Schema.ObjectId,
        required: true
        }]
    /*TO-DO:
   // choosers: [{
//        id: User.ObjectId,
     //   comments: [{
       //     timestamp: {type: Date, default: Date(), required: true },//How to get current date?
         //   content: {type: String, required: true}
           // }]
        //}]*/
});


PollSchema.methods.create = function create(object, callback) {
    if(!object.content_type || !object.option_type || !object.comments_enabled || !object.data.content)
        callback(new Error("PollSchema.methods.create: Bad arguments"));
    else {
        // date will be generated upon actual object creation, not client-side
        this.what = object.what;
	title
	
        this.content = object.content;
        this.content_type = object.content_type;
	this.tags = object.tags;
	this.comments_enabled = object.comments_enabled;
	this.comments = object.comments;
	this.option_type = object.option_type;
	this.options = object.options;
	this.content_type = object.content_type;
        this.data.content = object.data.content;
        callback(null);
    }
};

mongoose.model('poll', PollSchema, 'poll');
