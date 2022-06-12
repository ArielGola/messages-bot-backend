const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const newUser = new Schema({
    numPhone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

newUser.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

newUser.statics.comparePassword = (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword);
};

module.exports = model('UserModel', newUser);