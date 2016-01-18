var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "nelson@moringaschool.com",
pass: "303seminarian"
}
});
app.get('/',function(req,res){
// res.sendfile('index.html');
});
app.listen(3000,function(){
console.log("Express Started on Port 3000");
});