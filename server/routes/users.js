const router = require("express").Router()
const UserModel = require("../models/userSchema")
const listData = require("../models/listSchema")
const jwt = require("jsonwebtoken")
// to get the photos
const multer = require("multer")
// to read files
const fs = require("fs")
const { dirname } = require("path")
const path = require("path")
const { Router } = require("express")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({storage: storage});

// Router.get("/", )