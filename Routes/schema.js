const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
name:{ type: String},
email:{type:String},
phone:{type:Number},
address:{type:String},
class:{type:Number},
medium:{type:String},
password:{type:String},
});

module.exports = mongoose.model('students', thingSchema);