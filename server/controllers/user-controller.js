const { createError } = require("../middleware/HandlError");
const UserModel = require("../models/user-schema");

const ADD_USER_INFO = async (req, res, next) => {
  const {
    first,
    last,
    email,
    country,
    states,
    city,
    DOB,
    Usergender,
    Userage,
  } = req.body;
  if (
    !first ||
    !last ||
    !country ||
    !states ||
    !city ||
    !DOB ||
    !Usergender ||
    !Userage ||
    !email
  )
    return next(
      createError("Please fill all the details", 500, "user controller")
    );
  const addUser = new UserModel({ ...req.body });
  await addUser.save();
  return res.status(200).json({
    success: true,
    message: "user added",
    addUser,
  });
};

module.exports = ADD_USER_INFO;
