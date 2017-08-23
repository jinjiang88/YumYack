let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let NotifySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    message: {type: String, required: [true, 'Notifications required']},
}, {timestamps: true})

mongoose.model('notify', NotifySchema);