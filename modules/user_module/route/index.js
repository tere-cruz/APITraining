const express = require('express');
const route = express.Router();
const controller = require('../controller/userController');

route.post('/create_user', controller.createUser);
route.get('/get_all_users', controller.getAllUsers);
route.get('/get_user', controller.getUser);
route.put('/update_user', controller.updateUser);
route.delete('/delete_user/:user_id', controller.deleteUser);

module.exports = route;
