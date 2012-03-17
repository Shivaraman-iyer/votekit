PostSchema = new Schema({
    when: {type: Date, default: Date.now, required: true},
    who: { type: Schema.ObjectId, required: true},
    /* Expiry date is not always required. 
       Will be included if application wants to have one, might need a calnedar for it.*/
    expiry_date: {type: Date, required: false},
    /* Defines to whom the post is visible
       TO-DO: Add list of people it is visible.
              Should be string type or ids for each type of visibility?
              How to restrict to only 2 words? (public, custom)
       Status: Only for 'all' users/user's fb friends*/
    visibility: {type: String, default: "public"required: true},
    /* This will be the poll object.
       TO_DO: Default object needs to be defined.*/
    poll: { type: Poll, required: true}
});

PostSchema.methods.create = function create(object, callback){
    if(!object.who)
        callback(new Error("PostSchema.methods.create: Bad arguments"));
        else{
            this.who = object.who;
            this.when = object.when;
            callback(null);
        }
};

mongoose.model('post', PostSchema, 'post');
