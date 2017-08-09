let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    personWhoPosted: {type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    name: {type: String, minlength: 2, required: [true, 'Last Name must be at least 2 characters!']},
    detail: {type: String, minlength: 6, required: [true, 'Email must be a valid email']},
    rating: {type: Number, required: false, default: 0,},
    origin: {type:String, minlength: 4, required: [true, 'Username must be at least 4 characters long']},
    filePath: {type:String, minlength: 4, required: [true, 'Username must be at least 4 characters long']},
    filename: {type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']},
    rating:Number,
}, {timestamps: true})

mongoose.model('Posts', PostSchema);