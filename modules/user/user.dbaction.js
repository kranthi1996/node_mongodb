const mongoose = require('mongoose');
var User=require('../../models/user/user.js');

async function createUser(email_id,mobile_number,password,confirm_password){
       var user=new User({
           _id:mongoose.Types.ObjectId(),
           email_id:email_id,
           mobile_number:mobile_number,
           password:password,
           confirm_password:confirm_password
       });
      var data=user.save();
      return data;
}
async function getUser(email_id, password){
  return await  User.find({email_id:email_id,password:password})
}

async function updateUser(email_id){
  var query = { email_id: "kranthi@gmail.com" };
  return await User.update(query,{$set: { email_id: email_id }});
};
async function deleteUser(email_id){
  var query = { email_id: email_id };
  console.log(query);
  return await User.deleteOne(query)
}
module.exports={createUser,getUser,updateUser,deleteUser};