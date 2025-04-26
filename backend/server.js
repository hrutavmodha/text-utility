const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ["GET", "POST", "DELETE"]
}));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.log(err);
});
const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const cmtschema = new mongoose.Schema({
    email: String,
    comment: String
});
const user = mongoose.model("users", userschema);
app.post("/auth", async (req, res) => {
    const User = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const que = await user.findOne({ email: req.body.email })
    if (que) {
        res.send(`User already exists with email ${que.email}`);
    }
    else{
        await User.save()
        .then(() => {
            res.send("You have logged in successfully");
        }).catch((err) => {
            console.log(err)
            res.send("An error occurred while logging in. Please try again later.");
        });
    }
});
app.delete("/auth", async (req, res) => {
    let email = req.body.email
    await user.findOne({ email: email })
    .then(async()=>{
        let delcmd = await user.deleteOne({ email: email })
        res.json(delcmd)
    }).catch((err) => {
        res.send("An error occurred while logging out. Please try again later.");
    });
});
const review = mongoose.model("feedback", cmtschema);
app.post("/reviews", async (req, res) => {
    const comment = new review({
        email: req.body.email,
        comment: req.body.comment,
    });
    await comment.save()
    .then(() => {
        console.log("Comment saved successfully");
        res.send("Comment uploaded successfully");
    }).catch((err) => {
        console.log(err);
        res.send("An error occurred while uploading your comment. Please try again later.");
    });
});
app.get("/reviews", async (req, res) => {
    const list = await review.find({});
    res.json(list)
});
app.listen(process.env.PORT,() => {
    console.log(`Server is running on ${process.env.REACT_APP_FRONTEND_URL}`);  
});
