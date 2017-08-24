let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let NotifySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    notification: {type: String, required: [true, 'Notifications required']},
    url: {type: String, required: false},
    postedUser: {type: Schema.Types.ObjectId, ref: 'Users'},
}, {timestamps: true})

mongoose.model('Notifys', NotifySchema);