var userDbaction=require('./user.dbaction');
async function createUser(email_id,mobile_number,password,confirm_password){
     return await userDbaction.createUser(email_id,mobile_number,password,confirm_password)
};
async function getUser(email_id, password){
    return await userDbaction.getUser(email_id, password);
}
async function updateUser(email_id){
    return await userDbaction.updateUser(email_id);
};
async function deleteUser(email_id){
    return await userDbaction.deleteUser(email_id);
};
module.exports={createUser,getUser,updateUser,deleteUser};