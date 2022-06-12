const {Schema, model} = require('mongoose');

const newHistoryMsg = new Schema({
    numSend: {
        type: String,
        required: true
    },
    timeSended: {
        type: String
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = model('HistoryModel', newHistoryMsg);