'use strict';
var express=require('express');
var router=express.Router();
var usercontroller=require('./user.controller.js');
 
router.post('/create',usercontroller.createUser);
router.get('/get',usercontroller.getUser);
router.put('/update',usercontroller.updateUser)
router.delete('/delete',usercontroller.deleteUser)
module.exports = router;