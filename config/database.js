const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("DB Connection Successfully"))
    .catch((error) => {
      console.log("DB facing issue");
      console.log(error);
      process.exit(1)
    });
};

module.exports = dbConnect;
