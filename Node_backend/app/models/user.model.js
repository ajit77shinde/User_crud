const mongoose = require('mongoose');
const Userschema = mongoose.Schema({
    name: String,
    mobileno: Number,
    email : String

},
{
    timestamps: true
});

module.exports = mongoose.model('User', Userschema);