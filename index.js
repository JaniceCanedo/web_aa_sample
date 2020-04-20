var express = require("express");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var mysql = require('mysql');




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
    console.log("Server running on port 3001");
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
            " m.M_TOPIC \'Meeting Topic\', m.NOTE \'Notes\' FROM MEETING m inner join HOME_GROUP h on h.ROW_ID = m.HOME_GROUP_ID WHERE DY='" + req.query.d +"' ORDER BY SUBSTRING(m.M_TIME,-2), m.M_TIME";
    var out = "";
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        
        // out = "<table class=\"table table-hover table-dark\"><thead><tr>";

        // // res.write("<table>");
        // // res.write("<tr>");
        // for(var column in result[0]){
        //     // res.write("<td><label>" + column + "</label></td>";);
        //     out += "<th scope=\"col\" class=\"col-att\">" + column + "</th>";

        // }

        // //out += "<th scope=\"col\" class=\"col-att\">Map It</th>";
        // //res.write("</tr>");
        // out += "</tr></thead>";
        // for(var row in result){
        //     //res.write("<tr>");
        //     //out += "<tbody><tr><th scope=\"row\">"+row+"</th>";
        //     for(var column in result[row]){
        //         //res.write("<td><label>" + result[row][column] + "</label></td>");    
        //         out += "<td>" + result[row][column] + "</td>";
        //     }

        //     //console.log(result[row]['Location']);
        //     out+= "<td><button type=\"button\" class=\"btn btn-primary\" href=\"loc?l="+result[row]['Location']+"\">Map</button></td>";
        //     out += "</tr>";
        //     //res.write("</tr>");  

        // }
        // //res.write("</table>");
        // out += "</tbody></table>";


        console.log(result);
        
        
        out+="<div class=\"container col-lg-12 flex\">";
        out+="<div class=\"row\">";
        for(var row in result){
            out += "<div class=\"card col-lg-4 col-md-6\" id=\"mt-card-"+row+"\" >";
            out += "<h5 class=\"card-header\">"+result[row]['Home Group'] +" @ "+ result[row]['Meeting Time'] +" </h5> " +
            "<div class=\"card-body\"> "+ 
            "<h5 class=\"card-title\">Topic: "+result[row]['Meeting Topic']+" </h5> " +
            "<p class=\"card-text\">Location: "+result[row]['Location']+"</br> Meeting: "+result[row]['Meeting Type']+"</br> Notes: "+result[row]['Notes']+"</p> " +
            "<a href=\"#\" class=\"btn btn-primary btn-padding-2\">Map It</a>" +
            "<a class=\"btn btn-primary copy-btn btn-padding-2\">Copy</a>"  ;  
            out += "</div></div>";
        }

       // out += ;
       out+="</div></div>";

        console.log("write done");
        console.log(out);
        res.send(out);
    });
    
    con.end();
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

