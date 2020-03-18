var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    username : String,
    mobileno : Number
});

module.exports = mongoose.model('users',myschema);
