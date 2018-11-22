const mongoose = require('mongoose');
 
var userSchema=new mongoose.Schema({
        _id:String,
        email_id:String,
        mobile_number:Number,
        password:String,
        confirm_password:String
});
module.exports=mongoose.model('User',userSchema);