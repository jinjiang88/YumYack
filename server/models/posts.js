let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
   image: {type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']},
   text: {type: String, minlength: 2, required: [true, 'Posts must be at least 2 characters!']},
   rating:Number,
}, {timestamps: true})

mongoose.model('Posts', PostSchema);