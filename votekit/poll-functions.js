//Functions for polls
/*
 * Creates a new poll
 */
 function createPoll(object, callback){
    poll = new VSchemas.Poll();

    //Create a poll with given object
    poll.create(object, function(err) {  if(err) callback(err); else {
        callback(null, object);
        }});                                                                    
 }

 function savePoll(object, callback){
     //returns poll id
    object.save(function(err){
        if(err) callback(err);
        else {
            callback(null, object._id);
            }
        });
 }

publish = function publishPoll(object, callback) {                                                                                                                                         
    //Create poll wiht given object
    createPoll(object, function(err, object){ if(err) callback(err); else {
        savePoll(object, function(err, pollId) { if(err) callback(err); else{
            callback(null, pollId);
            }
        });
      }
    });
};
    
getPoll = function (pollId, callback) {
     // Find Post by ID
     VSchemas.Poll.findById(pollId, function(err, poll) {    if(err) callback(err); else {
        //make JSON
        callback(null, poll.toJSON);
        }
     });
}
