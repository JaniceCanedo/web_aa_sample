var express = require("express");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var mysql = require('mysql');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
const port = process.env.PORT || 3001;

const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "public/pdfs");
const files = fs.readdirSync(dirPath).map(name => {
    return {
      name: path.basename(name, ".pdf"),
      url: `/pdfs/${name}`
    };
  });


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
    var d = new Date();
    var n = d.getDay();

    console.log(days[n]);
    res.render("meetings/meetings-main.ejs", { files });
});

app.listen(port, () => {
    console.log("Server running on port 3001");
});

app.get("/service", (req,res) => {
    res.render("service/service-main.ejs");
});


app.get("/day", (req,res) =>{
    var con = mysql.createConnection({
        host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "jxo3261eq7j4m29a",
        password: "kzc1n5gecdnooxbw",
        database: "dj4gffrc8mownwro"
      });
      
      con.connect(function(err) {
          if (err) throw err;
      
      });

    var q = "SELECT h.GROUP_NM as \'Home Group\', h.LOC_NM  as \'Location\'," +
            " m.DY as \'Meeting Day\', m.M_TIME \'Meeting Time\', m.M_TYPE \'Meeting Type\'," +
            "CONCAT(ADDR_L1, \' \', CITY, \' \', ST , \' \', ZIP) \'Address\'," +
            " m.M_TOPIC \'Meeting Topic\', m.NOTE \'Notes\' FROM MEETING m inner join HOME_GROUP h on h.ROW_ID = m.HOME_GROUP_ID WHERE DY='" + req.query.d +"' AND m.ACTIVE=1 ORDER BY SUBSTRING(m.M_TIME,-2), m.M_TIME";
    var out = "";
    con.query(q, function (err, result, fields) {
        if (err) throw err;

             
        out+="<div class=\"container col-lg-12 flex\">";
        out+="<div class=\"row d-flex justify-content-center\">";
        for(var row in result){
            out += "<div class=\"card col-lg-4 col-md-6\" id=\"mt-card-"+row+"\" >";
            out += "<h5 class=\"card-header\">"+result[row]['Home Group'] +" @ "+ result[row]['Meeting Time'] +" </h5> " +
            "<div class=\"card-body\"> "+ 
            "<h5 class=\"card-title\">Topic: "+result[row]['Meeting Topic']+" </h5> " +
            "<p class=\"card-text\">Location: "+result[row]['Location']+"</br> Day: "+result[row]['Meeting Day']+"</br> Meeting: "+result[row]['Meeting Type']+"</br> Notes: "+result[row]['Notes']+"</p> " +
            "</div><div class=\"row justify-content-center\">"+
            "<a href=\"http://maps.google.com/maps?q="+ result[row]['Address'] +"\" class=\"btn btn-primary btn-padding-2\" target=\"_blank\">Map It</a>" +
            "<a class=\"btn btn-primary copy-btn btn-padding-2\">Copy</a>" ;
            out += "</div></div>";
        }

       // out += ;
       out+="</div></div>";

        console.log("write done");
        res.send(out);
    });
    con.end();
});

    
    // con.end();
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

    app.get("/online-day", (req,res) =>{
        var con = mysql.createConnection({
            host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            user: "jxo3261eq7j4m29a",
            password: "kzc1n5gecdnooxbw",
            database: "dj4gffrc8mownwro"
          });
          
          con.connect(function(err) {
              if (err) throw err;
          
          });

          var q = "select DAY as \'Meeting Day\', TIME as \'Meeting Time\', TYPE as \'Meeting Type\', CODE_P as \'Access Code - Phone\'," +
          " CODE_O as \'Access Code - Online\', PWD_P as \'Password - Phone\', PWD_O as \'Password - Onine\', PHONE as \'Phone Number\'" +
          "from ONLINE_MEETING WHERE DAY = \'"+ req.query.d +"\' ORDER BY SUBSTRING(TIME,-2), TIME";
            var out = "";
            con.query(q, function (err, result, fields) {
                if (err) throw err;

           
      out+="<div class=\"container col-lg-12 flex\">";
      out+="<div class=\"row d-flex justify-content-center\">";
      for(var row in result){
          out += "<div class=\"card col-lg-4 col-md-6\" id=\"mt-card-"+row+"\" >";
          out += "<h5 class=\"card-header\">"+result[row]['Meeting Type'] +" @ "+ result[row]['Meeting Time'] +" </h5> " +
          "<div class=\"card-body\"> "+ 
          "<h5 class=\"card-title\">Webex</h5> " +
          "<p class=\"card-text\">Access Code: "+result[row]['Access Code - Online']+"</br> Password: "+result[row]['Password - Onine']+"</br> To Dial In: "+result[row]['Phone Number']+"</br> Dial In Access Code: "+result[row]['Access Code - Phone']+"</p> " +
          "</br> Dial In Password: "+result[row]['Password - Phone']+"</p> " +
          "</div><div class=\"row justify-content-center\">"+
          "<a class=\"btn btn-primary copy-btn btn-padding-2\">Copy</a>" ;
          out += "</div></div>";
      }
    
           out+="</div></div>";
    
            console.log(req.query.d);
            console.log("online");
            res.send(out);
        });
        
        con.end();
});


;

