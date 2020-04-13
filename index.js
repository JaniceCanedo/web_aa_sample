var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mysql = require('mysql');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "jxo3261eq7j4m29a",
  password: "kzc1n5gecdnooxbw",
  database: "dj4gffrc8mownwro"
});

const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    res.render("site-main.ejs");
});

app.get("/index", (req,res) => {
    res.render("site-main.ejs");
});

app.get("/index.html", (req,res) => {
    res.render("site-main.ejs");
});

app.get("/how-works", (req,res) => {
    res.render("readings/readings-main.ejs");
});

app.get("/meetings", (req,res) => {
    res.render("meetings/meetings-main.ejs");
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});




app.get("/day", (req,res) =>{
    var q = "SELECT * FROM MEETING WHERE DY='" + req.query.d +"'";

    con.connect(function(err) {
        if (err) throw err;
        con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        });
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();

    res.render("Hello World");
});