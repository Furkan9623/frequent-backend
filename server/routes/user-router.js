const express = require("express");
const ADD_USER_INFO = require("../controllers/user-controller");
const user_router = express.Router();
user_router.post("/user-form", ADD_USER_INFO);
module.exports = user_router;
