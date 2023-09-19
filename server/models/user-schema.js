//
const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
  {
    first: { type: String, required: [true, "First name is required"] },
    last: { type: String, required: [true, "Last name is required"] },
    email: { type: String, required: [true, "Email are required"] },
    country: { type: String, required: [true, "Country required"] },
    states: { type: String, required: [true, "State required"] },
    city: { type: String, required: [true, "City required"] },
    Usergender: { type: String, required: [true, "Gender required"] },
    DOB: { type: String, required: [true, "DOB required"] },
    Userage: { type: String, required: [true, "Age required"] },
    UserImage: { type: String },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("UserInfo", user_schema);
module.exports = UserModel;
