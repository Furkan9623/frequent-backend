const fs = require("fs");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});

const FileUploadOnCloudinary = async (file, folderName) => {
  if (file?.mimetype !== "image/jpeg") {
    fs.rm("tmp", { recursive: true }, (error) => {
      if (error) console.log(error);
      console.log("delted");
    });
    throw new Error("Please upload jpeg format file");
  }
  try {
    const uploadFile = await cloudinary.uploader.upload(file?.tempFilePath, {
      folder: folderName,
    });
    fs.rm("tmp", { recursive: true }, (error, data) => {
      if (error) console.log(error);
      console.log("tmp delted");
    });
    return uploadFile;
  } catch (error) {
    throw error;
  }
};
module.exports = FileUploadOnCloudinary;
