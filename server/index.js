const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

app.use(express.json());
app.use(cors());

// CRUD;
app.get("/", (req, res) => {
    res.send("welcome");
});
const port = process.env.PORT || 5000;
const url = "mongodb+srv://wasiujahan764:jCf26QMTfMezYsMW@cluster0.xjhif0o.mongodb.net/";
app.listen(port, (req, res) => {
    console.log(`server running on port : ${port}`);
});

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("mongodb connection establish")).catch((error) => console.log("mongo connection failed : ", error.message));