PostSchema = new Schema({
    when: {type: Date, default: Date.now, required: true},
    who: { type: String, required: true},
    /* Expiry date is not always required. 
       Will be included if application wants to have one, might need a calnedar for it.*/
    expiry_date: {type: Date, required: false},
    /* Defines to whom the post is visible
       TO-DO: Add list of people it is visible.
              Should be string type or ids for each type of visibility?
              How to restrict to only 2 words? (public, custom)
       Status: Only for 'all' users/user's fb friends*/
    visibility: {type: String, enum:['public', 'custom'], default: "public", required: true},
    /* This will be the poll object.
       TO_DO: Default object needs to be defined.*/
    poll: { type: Schema.ObjectId, required: true}
});

PostSchema.methods.create = function create(object, callback) {
    if(!object.who || !object.visibility || !object.data.poll)
        callback(new Error("PostSchema.methods.create: Bad arguments"));
    else {
        // date will be generated upon actual object creation, not client-side
        this.who = object.who;
	this.expiry_date = object.expiry_date;
        this.visibility = object.visibility;
        this.data.poll = object.data.poll;
        callback(null);
    }
};

mongoose.model('post', PostSchema, 'post');
