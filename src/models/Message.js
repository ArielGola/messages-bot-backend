const {Schema, model} = require('mongoose');

const newMessage = new Schema({
    numUser: {
        type: String,
        required: true
    },
    numSend: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timeSend: {
        type: String
    },
    categor: {
        type: String,
        required: true
    },
    frequency: {
        type: Object
    }
}, {
    timestamps: true
});

module.exports = model('MsgModel', newMessage);