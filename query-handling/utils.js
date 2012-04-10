function makeJSON(post, poll, options_list, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    /*var i;
    console.log(options_list.length);
    for(i = 0; i < options_list.length; i++){
      //console.log(options_list[i].toJSON());
     result.options_list.push(options_list[i].toJSON()); 
    }*/
    result.poll.options_list = options_list;
    
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}
/*
function makeJSON(post, poll, callback) {
    var result = post.toJSON();
    result.poll = poll.toJSON();
    // We don't want to users to see the _id key in anything except the post's top level
    delete result.poll._id;
   
    callback(result);
}
*/