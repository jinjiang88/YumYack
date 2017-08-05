let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    fname: {type: String, minlength: 2, required: [true, 'First Name must be at least 2 characters!']},
    lname: {type: String, minlength: 2, required: [true, 'Last Name must be at least 2 characters!']},
    email: {type: String, minlength: 6, required: [true, 'Email must be a valid email']},
    password: {type: String, minlength: 6, required: [true, 'Password must be at least 6 characters long']},
    username: {type:String, minlength: 4, required: [true, 'Username must be at least 4 characters long']}
}, {timestamps: true})

mongoose.model('User', UserSchema);
