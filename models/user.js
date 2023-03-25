const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname required'],
        trim: true,
        maxlength: [50, 'Firstname cannot be more than 50 characters']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname required'],
        trim: true,
        maxlength: [50, 'Lastname cannot be more than 50 characters']
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number max lengt is 20']
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add valid email'
        ]
    },
    isBanned: {
        type: Boolean,
        default: false
    }

})



module.exports = mongoose.model('User', UserSchema);
