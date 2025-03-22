const { types, required } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;           //  Corrected Schema import

const userSchema = new Schema({       //  Use Schema instead of schema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;
