var express = require("express");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "jxo3261eq7j4m29a",
  password: "kzc1n5gecdnooxbw",
  database: "dj4gffrc8mownwro"
});

con.connect(function(err) {
    if (err) throw err;

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
    var out = "";
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        
        out = "<table class=\"table table-hover table-dark\"><thead><tr>";

        // res.write("<table>");
        // res.write("<tr>");
        for(var column in result[0]){
            // res.write("<td><label>" + column + "</label></td>";);
            out += "<th scope=\"col\">" + column + "</th>";
        }
        //res.write("</tr>");
        out += "</tr></thead>";
        for(var row in result){
            //res.write("<tr>");
            out += "<tbody><tr><th scope=\"row\">"+row+"</th>";
            for(var column in result[row]){
                //res.write("<td><label>" + result[row][column] + "</label></td>");    
                out += "<td>" + result[row][column] + "</td>";
            }
            out += "</tr>";
            //res.write("</tr>");         
        }
        //res.write("</table>");
        out += "</tbody></table>";
        console.log("write done");
        console.log(out);
        res.send(out);
    });
    
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("demo").innerHTML =
    //     this.responseText;
    //   }
    // };
    // xhttp.open("GET", "ajax_info.txt", true);
    // xhttp.send();
    // console.log(out);
    // res.write("Hello World");
    // console.log("next");
    //res.end();
});