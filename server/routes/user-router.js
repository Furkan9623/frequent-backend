const express = require("express");
const {
  ADD_USER_INFO,
  GET_SINGLE_USER,
} = require("../controllers/user-controller");
const user_router = express.Router();
user_router.post("/user-form", ADD_USER_INFO);
user_router.get("/user/:id", GET_SINGLE_USER);
module.exports = user_router;
