const express = require("express");
const route = express.Router();
const controller = require("../controller/userController");
const {
  authenticate,
} = require("../../../middleware/jwtAuthenticationMiddleware");

route.post("/create_user", controller.createUser);
route.get("/get_all_users", authenticate, controller.getAllUsers);
route.get("/get_user", authenticate, controller.getUser);
route.put("/update_user", authenticate, controller.updateUser);
route.delete("/delete_user/:user_id", authenticate, controller.deleteUser);

module.exports = route;
