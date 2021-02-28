const express = require('express');
const bodyparser = require('body-parser');
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Rehan:Alexa693@cluster0.2wzmd.mongodb.net/commentDB?retryWrites=true&writeConcern=majority/commentDB ",{ useUnifiedTopology: true }, { useNewUrlParser: true });

const app = express();
const fs = require("fs");
const https = require('https');
app.use(express.static("assets"));
app.use(bodyparser.urlencoded({
  extended: true
}));

// ================EJS SET UP=======================================================================================================
app.set('view engine','ejs');

// ===============MONGOOSE SCHEMA===================================================================================================

const commentSchema=new mongoose.Schema({
comment:String,
date:String,
time:String
});
const Comment=mongoose.model("Comment",commentSchema);

// ================MONGOOSE SCHEMA==================================================================================================


// main body page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/myindex.html");
})

app.post("/", function(req, res) {
  var search = req.body.search;
  res.sendFile(__dirname + "/myindex.html");

})








//REST API SUBSCRIBE TO MAILCHIMP SERVER
app.post("/subscribe", function(req, res) {
  var firstName = req.body.firstname;
  var secondName = req.body.secondname;
  var email = req.body.email;
  firstName = firstName.toUpperCase();
  secondName = secondName.toUpperCase();
  email = email.toUpperCase();
  //converting  the data received to json formet
  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: secondName
      }
    }]
  }
  var jsondata = JSON.stringify(data);

  const url = "https://us7.api.mailchimp.com/3.0/lists/02ee0bdbe9";
  const options = {
    method: "POST",
    auth: "Rehan:56e93fffde0e33b27283d37cd0236fe0-us7"
  }
  const request = https.request(url, options, function(response) {

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })
  request.write(jsondata);
  request.end();

  res.sendFile(__dirname + "/subscribe.html");
});

// API KEY   =  56e93fffde0e33b27283d37cd0236fe0-us7
// API ID = 02ee0bdbe9














// =======================COMMENT HANDELING==================================================================================//

var ddr;
app.post("/comment", function(req, res) {
  comment = req.body.comment;
  console.log(comment);
  var a=new Date().toLocaleTimeString();
  var b=new Date().toLocaleDateString();
  console.log(b);
var comment=new Comment({//SENDING COMMENT TO database
  comment:comment,
  date:b,
  time:a
});
comment.save();
  Comment.find(function(err,comments){//RETRIVING COMMENTS FROM MONGO DATABASE
  if(err){
  console.log(err);
  }
  else{
  ddr=comments;
  console.log(ddr[1]);
  res.render("vedio",{mycomment:comments});
  }
});
})




// =======================VEDIO PROCESSING===================================================================================//

var path='assets/vedios/vedio1.mp4';
var a="here to be randered";
app.get("/player",function(req,res){
  var commentArr;


  Comment.find(function(err,comments){
  if(err){
    console.log(err);
  }
  else{
  ddr=comments;
  console.log(ddr.length);
  console.log(ddr[1]);
  res.render("vedio",{mycomment:comments});

  }

  });

})



// 2nd=========/
app.get("/player2",function(req,res){
  var commentArr;


  Comment.find(function(err,comments){
  if(err){
    console.log(err);
  }
  else{
  ddr=comments;
  console.log(ddr.length);
  console.log(ddr[1]);
  res.render("vedio1",{mycomment:comments});

  }

  });

})

// ===========================VEDIO RANDERING=================================================
app.post("/vedioRandering",function(req,res){
var a=parseInt(req.body.randerText);
var p = 'assets/vedios/vedio'+a+'.mp4';
console.log(p);
path=p;
var a="here to be randered";
Comment.find(function(err,comments){
if(err){
  console.log(err);
}
else{
ddr=comments;
res.render("vedio",{mycomment:comments});
}
});
})


///2nd
app.post("/vedioRandering2",function(req,res){
var a=parseInt(req.body.randerText);
var p = 'assets/vedios/vedio'+a+'.mp4';
console.log(p);
path=p;
var a="here to be randered";
Comment.find(function(err,comments){
if(err){
  console.log(err);
}
else{
ddr=comments;
res.render("vedio",{mycomment:comments});
}
});
})



// ===============VEDIO PROCESSING===========================

app.get('/video1', function(req, res) {
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})



// 2nd======
app.get('/video2', function(req, res) {
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})


//RUNNING APP IN PORT 300
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running");
});
