const express = require("express");

const cors = require("cors");
// const BulkData = require("./utils/bulkDataInsert");
// BulkData()
const DATABASE = require("./config/db");
DATABASE();
const app = express();
app.use(cors());
app.use(express.json());
const server = app.listen(8080, () => console.log("server run on port 8080"));
server.on("listening", () => console.log("server connected"));
server.on("error", (er) => console.log(er));
