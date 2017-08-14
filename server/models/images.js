

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ImageSchema = new Schema({
    personWhoPosted: {type: Schema.Types.ObjectId, ref: 'Users'},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    name: {type: String, minlength: 2, required: [true, 'Last Name must be at least 2 characters!']},
    detail: {type: String, minlength: 6, required: [true, 'Email must be a valid email']},
    rating: {type: Number, required: false, default: 0,},
    origin: {type:String, minlength: 4, required: [true, 'Username must be at least 4 characters long']},
    imageLink: {type:String, minlength: 4, required: [true, 'Username must be at least 4 characters long']},
}, {timestamps: true})

mongoose.model('Images', ImageSchema);