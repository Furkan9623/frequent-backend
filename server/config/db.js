const mongoose = require("mongoose");
const DATABASE = async () => {
  return mongoose
    .connect(
      "mongodb+srv://mdfurkan:furkan123@frequent.etgtebo.mongodb.net/Frequent",
      { useNewUrlParser: true }
    )
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((er) => console.log(er));
};

module.exports = DATABASE;
