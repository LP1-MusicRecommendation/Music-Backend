const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    psssword : {
        type : String,
        required : true
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;