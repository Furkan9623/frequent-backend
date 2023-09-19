const FileUploadOnCloudinary = require("../config/cloundinary-config");
const { createError } = require("../middleware/HandlError");
const UserModel = require("../models/user-schema");

const ADD_USER_INFO = async (req, res, next) => {
  console.log(req.body);
  const body = JSON.parse(req.body.User);
  const { UserImage } = req.files || "";
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
  } = body;

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
  try {
    const imageUrl =
      UserImage && (await FileUploadOnCloudinary(UserImage, "UserImage Image"));
    const addUser = new UserModel({ ...body, UserImage: imageUrl?.url });
    await addUser.save();
    return res.status(200).json({
      success: true,
      message: "user added",
      addUser,
    });
  } catch (error) {
    return next(createError(error.message, 500, "user controlle"));
  }
};

const GET_SINGLE_USER = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(createError("Id not found", 500, "get single user"));
  try {
    const getSingleUser = await UserModel.findOne({ _id: id });
    if (!getSingleUser)
      return next(createError("User not found", 500, "get controller"));
    return res.status(200).json({
      success: true,
      message: "get user ",
      User: getSingleUser,
    });
  } catch (error) {
    return next(createError(error.message, 500, "get controller"));
  }
};
module.exports = { ADD_USER_INFO, GET_SINGLE_USER };
