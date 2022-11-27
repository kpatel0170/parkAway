require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/users");

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.json("server start")
// })
app.use(cors({ origin: "*", credentials: true }));

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});