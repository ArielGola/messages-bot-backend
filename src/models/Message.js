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
    category: {
        type: Array
    },
    frequency: {
        type: Object
    }
});

module.exports = model('MsgModel', newMessage);