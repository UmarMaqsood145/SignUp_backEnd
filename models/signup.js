const mongoose = require('mongoose');

const SignUpSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 3,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30,
        trim: true
    },
    number: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true,
    },
    c_password: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('registrationdata', SignUpSchema);