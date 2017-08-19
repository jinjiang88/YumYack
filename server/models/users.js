let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    lname: {type: String, minlength: 2, required: [true, 'Last Name must be at least 2 characters!']},
    fname: {type: String, minlength: 2, required: [true, 'Last Name must be at least 2 characters!']},
    email: {type: String, minlength: 4, required: [true, 'Email must be a valid email']},
    password: {type: String, minlength: 6, required: [true, 'Password must be at least 6 characters long']},
    username: {type:String, minlength: 6, required: [true, 'Username must be at least 4 characters long']},
    friends: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    posts: {type: Number, required: false, default: 0,},
    location: {type:String, required:true}
}, {timestamps: true})

mongoose.model('Users', UserSchema);
