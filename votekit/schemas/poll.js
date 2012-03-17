PollSchema = new Schema({
//    author: {type: ObjectId, required: true},
    timestamp: {type: Date, default: Date(), required: true},
    //This is the poll question, the user may or may not state a poll question.
    poll_issue: {type: String, default: '' },
//    options: {[Schema.ObjectId]},
//    tags: [String],
//    visibility:{ type: String, enum: ['public', 'private'], default: 'public', required: true },//Custom will be added later
    /* Issue - this is a poll questions; 
     * Option: This is an option to the poll question; 
     * Vote: This is one of the options, like, dislike, stars, etc
     */
  //  postType: type: String, enum: ['issue', 'option', 'vote'], default: 'issue', required: true},
   // choosers: [{
//        id: User.ObjectId,
     //   comments: [{
       //     timestamp: {type: Date, default: Date(), required: true },//How to get current date?
         //   content: {type: String, required: true}
           // }]
        //}]
});

PollSchema.methods.create = function create(object, callback) {                                                                                                                            
        if(!object.poll_issue)
             callback(new Error("PollSchema.methods.create: Bad arguments"));
         else {
             // date will be generated upon actual object creation, not client-side??
             this.poll_issue = object.poll_issue;
             this.timestamp = object.timestamp;
             //TODO:more to add
             callback(null);
         }
     };
      
      mongoose.model('poll', PollSchema, 'poll');

