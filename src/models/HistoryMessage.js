const {Schema, model} = require('mongoose');

const newHistoryMsg = new Schema({
    numUser: {
        type: String,
        required: true
    },
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
    },
    categor: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('HistoryModel', newHistoryMsg);