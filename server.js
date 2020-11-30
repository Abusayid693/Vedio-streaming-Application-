const express = require('express');
const app=express();

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

})




app.listen(3000,function(){
  console.log("server ins running in port 3000");
})
//This server is running at localhost:3000
//the styles in css,images  wont work unless static path for those files are added
