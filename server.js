const express = require("express");
const app = express();

// require("dotenv").config();

// define port
// const PORT = process.env.PORT || 3000;

// middleware
// app.use(express.json());

// // define routes

// app.post();

// // database connections
const dbConnect = require("./config/database");
dbConnect();    


app.listen(3000, () => {
    console.log("App is successfully run")
})


app.get("/" , (req,res) => {
        res.send("<h1>hello, everyone</h1>")
})