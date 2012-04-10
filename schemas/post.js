PostSchema = new Schema({
    when: {
      type: Date, 
      default: Date.now, 
      required: true},
      
    who: { 
      type: String, 
      required: true},
      
    /* Expiry date is not always required. 
       Will be included if application wants to have one, might need a calnedar for it.*/
    expiry_date: {
      type: Date, 
      default: "01-JAN-2000",
      required: true},
    
      /* Defines to whom the post is visible
       TO-DO: Add list of people it is visible.
              Should be string type or ids for each type of visibility?
              How to restrict to only 2 words? (public, custom)
       Status: Only for 'all' users/user's fb friends*/
    visibility: {
      type: String, 
      enum:['public', 'custom'], 
      default: "public", 
	required: true},
    //TODO Add list of user id for whom this post is visible
      /* This will be the poll object.
       TO_DO: Default object needs to be defined.*/
    poll: { 
      type: Schema.ObjectId, 
      //	ref: 'poll',
      required: true}
});

PostSchema.methods.create = function create(object, callback) {
  console.log('PostSchema rcvd object: \n', object);
    if(!object.who){
        //callback(new Error("PostSchema.methods.create: Bad arguments"));//TODO
	console.log("PostSchema.methods.create: Bad arguments,who ", object.who);}
     else if(!object.visibility)
       console.log("PostSchema.methods.create: Bad arguments,visibility ", object.visibility);
     else if(!object.poll)
       console.log("PostSchema.methods.create: Bad arguments, poll", object.poll);
    else {
        // date will be generated upon actual object creation, not client-side
        if(object.when != undefined)
	  this.when = object.when;
	
        this.who = object.who;
	if(object.expiry_date != undefined)
	  this.expiry_date = object.expiry_date;
	
	if(object.visibility != undefined)
	  this.visibility = object.visibility;
	
        this.poll = object.poll;
        callback(null);
    }
};

mongoose.model('post', PostSchema, 'post');
