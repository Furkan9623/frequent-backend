const express = require("express");

const cors = require("cors");
// const BulkData = require("./utils/bulkDataInsert");
// BulkData()
const DATABASE = require("./config/db");
const user_router = require("./routes/user-router");
const { createError, HandleError } = require("./middleware/HandlError");
const fileUploader = require("express-fileupload");
DATABASE();
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUploader({ useTempFiles: true }));
app.use("/api/v1", user_router);
//
app.use("*", async (req, res, next) => {
  return next(
    createError(`${req.originalUrl} this url not valid`, 500, "global error")
  );
});
app.use(HandleError);
const server = app.listen(8080, () => console.log("server run on port 8080"));
server.on("listening", () => console.log("server connected"));
server.on("error", (er) => console.log(er));
