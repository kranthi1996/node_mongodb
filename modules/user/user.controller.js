'use strict';
var userservice = require('./user.service');
var errorHandler = require("../../util/errorHandler");
var responseSender = require('../../util/responseHandler');

async function createUser(req, res) {
    try {
        var { email_id, mobile_number, password, confirm_password } = req.body;
        var data = await userservice.createUser(email_id, mobile_number, password, confirm_password)
        responseSender(req, res, data)
    } catch (err) {
        console.log(err);
        errorHandler(req, res, { msg: "something error we r getting in the posting the user" }, 500);
    }
};
async function getUser(req, res) {
    try {
        var { email_id, password } = req.body;
        var data = await userservice.getUser(email_id, password)
        responseSender(req, res, data)
    } catch (err) {
        console.log(err);
        errorHandler(req, res, { msg: "something error we r getting in getting the user" }, 500);
    }
};
async function updateUser(req, res) {
    try {
        var { email_id } = req.body;
        var data = await userservice.updateUser(email_id);
        responseSender(req, res, data);
    } catch (err) {
        errorHandler(req, res, { msg: "something error we r getting in updating the user" }, 500);
    }
};
async function deleteUser(req, res) {
    try {
        var { email_id } = req.body;
        var data = await userservice.deleteUser(email_id);
        responseSender(req, res, data);
    } catch (err) {
        errorHandler(req, res, { msg: "something error we r getting in deleting the user" }, 500);
    }
}

module.exports = { createUser, getUser, updateUser, deleteUser }