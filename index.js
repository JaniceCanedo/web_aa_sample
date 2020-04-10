var express = require("express");
var app = express();
var bodyParser= require("body-parser");

const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    res.render("site-main.ejs");
});

app.get("/index", (req,res) => {
    res.render("site-main.ejs");
});


app.get("/how-works", (req,res) => {
    res.render("readings/readings-main.ejs");
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});