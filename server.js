var express=require('express')
var app=express()
var bodyParser=require('body-parser')

app.set('view engine','ejs')
app.use(express.static(__dirname+ "/public"));
// app.use(express.static(__dirname + "/img"));
app.use(bodyParser.urlencoded({extended: false}));


app.get("/",function(req,res){
    res.render('index.ejs')
    

})
app.listen(process.env.PORT||3000, process.env.IP, function(){
    console.log("The Server Has Started!");
 });