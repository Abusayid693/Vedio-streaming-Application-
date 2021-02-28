// // vedio
//
// const VP = document.getElementById('videoPlayer') // player
// const VPToggle = document.getElementById('toggleButton') // button
// VPToggle.addEventListener('click', function() {
//   if (VP.paused) VP.play()
//   else VP.pause()
// })
var seriesName="Lost in space";
var noOfSeasons=3;
var noOfEpidodesPerSeason=8;

var seasonheader1=["1. Hello bill","2. Hello Rehan", "3. Hello Eleven","4. Hello john", "5. Everthing will end ", "6. New Beginning", "7. Dooms day", "8. Its Mills" ];
var seasontext1=["aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ","    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "];


var seasonheader2=["1. Hello me","2. Hello me2", "3. Hello me3","4. john be ready", "5. Everthing will start ", "6. la Revolution", "7. Game of thrones", "8. Dark"];
var seasontext2=["Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix","Stranger Things is an American science fiction horror mystery-thriller streaming television series created by the Duffer Brothers and released on Netflix"];


var seasonheader3=["1. yes its me","2. Hello Rehan", "3. Hello Eleven","4. Hello john", "5. Everthing will end ", "6. New Beginning", "7. Dooms day", "8. Its Mills"];
var seasontext3=["The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen","The brothers serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen"];

contentVisible();
function contentVisible(){
document.querySelector("#read-more-button").addEventListener("click",function(){
  document.querySelector("#read-more").classList.toggle("read-more-not-visible");
})
}


// ===============sending vedio to be randered to server via post request==============


// vedioRanderer(noOfEpidodes)
vedioRanderer(noOfEpidodesPerSeason);
beginning('btn-1',1,8,seasonheader1,seasontext1);
// season(buttonId,startingEpisodeNo,noOfEpidodes,headerArr,textArr)

season('btn-1','btn-2','btn-3',noOfEpidodesPerSeason*0+1,noOfEpidodesPerSeason,seasonheader1,seasontext1,1);
season('btn-2','btn-1','btn-3',noOfEpidodesPerSeason*1+1,noOfEpidodesPerSeason,seasonheader2,seasontext2,2);
season('btn-3','btn-1','btn-2',noOfEpidodesPerSeason*2+2,noOfEpidodesPerSeason,seasonheader3,seasontext3,3);











// ===============VEDIO RANDERER==================
function vedioRanderer(noOfEpidodes){
for(var i=1;i<noOfEpidodes+1;i++){
  var j=".vid"+i;
document.querySelector(j).addEventListener("click",function(){
var k=this.id;
document.querySelector("#randerTex").setAttribute("value",k);
document.querySelector("#randerButton").click();
})
}
}

// ====================SEASON FUNCTION================
function season(buttonId,altr1,altr2,episodeNo,noOfEpidodes,headerArr,textArr,seasonNo){
  document.querySelector("#"+buttonId).classList.add("btn-enable"); //enabling season buttons
  document.querySelector("#"+buttonId).classList.remove("btn-disable");//enabling season buttons
document.querySelector("#"+buttonId).addEventListener("click",function(){
  document.querySelector("#"+buttonId).classList.add("btn-active");
  document.querySelector("#"+altr1).classList.remove("btn-active");
  document.querySelector("#"+altr2).classList.remove("btn-active");

  document.querySelector(".about_section h3").innerHTML="Watch season-"+seasonNo+" now";
  document.querySelector(".about_section h2").innerHTML="~ SEASON-"+seasonNo;



  // document.querySelector("#"+buttonId).classList.toggle("btn-not-active");

  var temp= episodeNo;
var src;
  for(var i=1;i<noOfEpidodes+1;i++){
    var j=".vidH"+i;
    var k=".vidT"+i;
    var l=".vid"+i;

      src="Thumnails/S/vid-"+temp+".jpg";
    document.querySelector(j).innerHTML=headerArr[i-1];
    document.querySelector(k).innerHTML=textArr[i-1];
    document.querySelector(l).setAttribute("id",temp);
    document.querySelector(l+" img").setAttribute("src",src);
    // document.querySelector(l+" img").setAttribute("src",src);

    temp++;

}})}


// =================Beginning===========================
function beginning(buttonId,episodeNo,noOfEpidodes,headerArr,textArr){
  var temp= episodeNo;
var src;
  for(var i=1;i<noOfEpidodes+1;i++){
    var j=".vidH"+i;
    var k=".vidT"+i;
    var l=".vid"+i;
    src="Thumnails/S/vid-"+temp+".jpg";
    document.querySelector(j).innerHTML=headerArr[i-1];
    document.querySelector(k).innerHTML=textArr[i-1];
    document.querySelector(l).setAttribute("id",temp);
    document.querySelector(l+" img").setAttribute("src",src);
    temp++;

        document.querySelector("#btn-2").classList.add("btn-disable");
        document.querySelector("#btn-2").classList.remove("btn-enable");
    //

}
}
