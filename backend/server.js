const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL
}));
app.use(express.static(path.join(__dirname, "..", "frontend","build")));
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
    email: String
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
    });
    await User.save().then(() => {
        console.log("Data saved successfully");
        res.send("You have logged in successfully");
        res.end();
    }).catch((err) => {
        console.log(err);
    });
});
const review = mongoose.model("feedback", cmtschema);
app.post("/reviews", async (req, res) => {
    const comment = new review({
        email: req.body.email,
        comment: req.body.comment,
    });
    await comment.save().then(() => {
        console.log("Comment saved successfully");
        res.send("Comment uploaded successfully");
        res.end();
    }).catch((err) => {
        console.log(err);
        res.send("An error occurred while uploading your comment. Please try again later.");
        res.end();
    });
});
app.get("/#/reviews", async (req, res) => {
    const list = await review.find({});
    res.json(list)
});
app.listen(process.env.PORT,() => {
    console.log(`Server is running on ${process.env.REACT_APP_BACKEND_URL}`);
});