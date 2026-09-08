const express = require("express");
const postModel = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./services/storageService")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());
const upload = multer({storage:multer.memoryStorage()});

//POST METHOD______________
app.post("/createPost", upload.single("image"), async (req,res) => {
    
    const result = await uploadFile(req.file.buffer);
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "post created successfully",
        post
    })
})

//GET METHOD_____

app.get("/getApi", async (req,res) => {
    const posts = await postModel.find();

    res.status(200).json({
        message: "post found successfully",
        posts
    })
})

module.exports = app;