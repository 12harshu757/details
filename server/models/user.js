const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    mobile: String,
    college:String,
    city:String,
    add:String,
});

module.exports = mongoose.model('User', userSchema, 'batches');
//module.exports = mongoose.model('User', userSchema, 'Infos');