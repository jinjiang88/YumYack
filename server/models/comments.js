let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({

    _user: {type: Schema.Types.ObjectId, ref: 'Users'},  //id of user whom created the post
    comment: {type: String, required: [true, 'Please write something!']}, //comment of post

}, {timestamps: true})

mongoose.model('Comments', CommentSchema);