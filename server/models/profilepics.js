let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProfilePicSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},  //id of user whom created the post
    filename:{type: String, minlength: 6, required: [true, 'Url must be at least 6 characters!']}, //uploaded photos filename from assets/images

}, {timestamps: true})

mongoose.model('ProfilePics', ProfilePicSchema);