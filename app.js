 const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(express.static(__dirname+"/views"));


app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended: true}));
var items = ["Buy food","Cook food","Eat food"];
app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {day: day, newListItems: items});

});
app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
});

app.listen(3001, function(){
    console.log("listening at port 3000");
})
/* 
app.get('/', function(req, res){ 
    //res.render('login');
    res.sendFile(__dirname+'/index.html');
});
*/