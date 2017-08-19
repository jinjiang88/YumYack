let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'Users'},  
    filename:{type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']},
    name: {type: String, minlength: 2, required: [true, 'Url must be at least 6 characters!']},
    description: {type: String, minlength: 2, required: [true, 'Posts must be at least 2 characters!']},
    origin: {type:String, required:[true,'You must select an origin']},
    _userScores: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    score: Array,
    average: Number,

}, {timestamps: true})

mongoose.model('Posts', PostSchema);
