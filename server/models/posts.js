let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({

    user: {type: Schema.Types.ObjectId, ref: 'Users'},  //id of user whom created the post
    filename:{type: String, default: "placement.png"}, //uploaded photos filename from assets/images
    name: {type: String, minlength: 2, required: [true, 'Url must be at least 6 characters!']}, //name of food
    description: {type: String, minlength: 2, required: [true, 'Posts must be at least 2 characters!']}, //description of food
    origin: {type:String, required:[true,'You must select an origin']},//origin of food
    userScores: [{type: Schema.Types.ObjectId, ref: 'Users'}], //id of users that rated
    score: Array, //scores that corresponds to _userScores
    average: {type: Number, default:0},//the average of all user scores
    comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],

}, {timestamps: true})

mongoose.model('Posts', PostSchema);
