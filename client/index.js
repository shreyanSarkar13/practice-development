const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(2000, () => {
    console.log("Server Started");
});


