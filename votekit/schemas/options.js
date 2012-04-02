OptionStarSchema = new Schema({
        content: {
            type: String,
            required: true
        },
        choosers: [{//there will be 5 elements in this array of choosers for every poll that wants star ratings
            numOfStars : {
                type: Number,
                enum: ['1', '2', '3', '4', '5'],
                required: true
            },
            whoChose: [ {
                type: String,//stores id of users who 'numOfStars' for this option
                required: true
            }]
        
        }]    
});

OptionLikeDislikeSchema = new Schema({
	content: {
            type: String,
            required: true
        },
	who_likes :[ {
                type: String,
                required: true
            }],
	who_dislikes :[ {
                type: String,
                required: true
            }]
});

OptionListSchema = newSchema({
     content: {
            type: String,
            required: true
        },
     choosers:[{
                type: String,//stores id of users who 'numOfStars' for this option
                required: true
            }]
});
