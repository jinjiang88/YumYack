let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    
    filename:{type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']},
   name: {type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']},
   description: {type: String, minlength: 2, required: [true, 'Posts must be at least 2 characters!']},
   origin: {type:String, required:[true,'You must select an origin']},
   userScores: [{type: Schema.Types.ObjectId, ref: 'User'}],
   score: Array,
   average: Number,

}, {timestamps: true})

mongoose.model('Posts', PostSchema);
