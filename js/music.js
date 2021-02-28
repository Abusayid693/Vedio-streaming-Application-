
var text = ["music", "music-1", "music-2","music-3","music-4","music-5","music-6"];

myplayPause();
myForward() ;
myBackward();
fullSize();
volumeDown();
volumeUp();

var vol=0.1;
var back=3;
var forward=3;

var play = "music/audio3.mpeg";

var audio = new Audio(play);

// ======================play pause===================

function myplayPause() {

  document.querySelector("#play-pause").addEventListener("click", function() {



    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");



 if(audio.paused){
  audio.play();
  document.querySelector("#play-paused").classList.toggle("fa-pause");

}
else {
  audio.pause();
  document.querySelector("#play-paused").classList.toggle("fa-play");

}
  })

};

//======================backwarding music================
function myBackward() {




  document.querySelector("#backward").addEventListener("click", function() {
    var imageS="img/music"+back+".jpg";
    document.querySelector("#play-paused").classList.toggle("fa-pause");
    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");
  document.querySelector("#music-top-image").setAttribute("src",imageS);
  document.querySelector("#music_text").innerHTML=text[back];



audio.pause();

 play = "music/audio"+back +".mpeg";
 audio = new Audio(play);

  audio.play();
  if(back==1){
    back=6;
  }
  else back--;

  })

};


//=================forwarding music=================
function myForward() {
  document.querySelector("#forward").addEventListener("click", function() {
  var imageS="img/music"+forward+".jpg";
    document.querySelector("#play-paused").classList.toggle("fa-pause");
    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");
  document.querySelector("#music-top-image").setAttribute("src",imageS);
  document.querySelector("#music_text").innerHTML=text[forward];

    audio.pause();

     play = "music/audio"+forward+".mpeg";
     audio = new Audio(play);

      audio.play();
      if(forward==6){
        forward=1;
      }
      else forward++;




  })

};

//=====================full body backgroud blur
function fullSize(){
  document.querySelector(".music-bottom").addEventListener("click", function() {


    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");





  // document.querySelector(".covid_btn").classList.toggle("covid_btn_none_display");
  })
  document.querySelector(".music-middle").addEventListener("click", function() {


    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");





  // document.querySelector(".covid_btn").classList.toggle("covid_btn_none_display");
  })

  document.querySelector(".music-top").addEventListener("click", function() {


    document.querySelector("#music3").classList.toggle("music3-scale");
  document.querySelector("#backward").classList.toggle("backward");
  document.querySelector("#backward").classList.toggle("backward-mb");
  document.querySelector("#play-pause").classList.toggle("play-pause");
  document.querySelector("#play-pause").classList.toggle("play-pause-mb");
  document.querySelector("#forward").classList.toggle("forward");
  document.querySelector("#forward").classList.toggle("forward-mb");





  // document.querySelector(".covid_btn").classList.toggle("covid_btn_none_display");
  })
};

//==========Volume increase and decrease=================

function volumeDown(){
  document.querySelector("#volume-down").addEventListener("click",function(){
var c= audio.volume;
  audio.volume=c-vol;





  })
};

function volumeUp(){
  document.querySelector("#volume-up").addEventListener("click",function(){
var d=  audio.volume;
  audio.volume=d+vol;





  })
};



//slidecontainer

// audio.volume=slideVol;
