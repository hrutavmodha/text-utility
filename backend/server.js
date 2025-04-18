const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000
app.use(express.json(), cors());
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
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
app.post("/auth", (req, res) => {
    const User = new user({
        name: req.body.name,
        email: req.body.email,
    });
    User.save().then(() => {
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
    });
});
app.get("/reviews", async (req, res) => {
    const list = await review.find({});
    res.json(list)
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(`${port}`, () => {
    console.log("Server is running on render");
});