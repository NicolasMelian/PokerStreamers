// 1
var xmlhttp = new XMLHttpRequest();
var urlOne = "https://wind-bow.glitch.me/twitch-api/streams/xflixx";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valOne = JSON.parse(this.responseText);
    myFunctionOne(valOne);
  }
};
xmlhttp.open("GET", urlOne, true);
xmlhttp.send();

function myFunctionOne(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("oneBtn").innerHTML = "Offline";
  document.getElementById("oneBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("oneCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("oneImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url']; 
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("oneSpan");

    document.getElementById("oneBtn").innerHTML = "Online";
    document.getElementById("oneText").innerHTML= status + "...";
    document.getElementById("oneLink").href = result
    document.getElementById("oneView").innerHTML = view;
    document.getElementById("oneBtn").style.backgroundColor = "RGB(118,173,141)";
    document.getElementById("oneCard").style.border= '4px solid RGB(118,173,141)';
    document.getElementById("oneImage").style.border= '4px solid RGB(118,173,141)';
    hidden.style.display = "flex";
    ;}

}

// 2
xmlhttp = new XMLHttpRequest();
var urlTwo = "https://wind-bow.glitch.me/twitch-api/streams/jeffgrosspoker";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valTwo = JSON.parse(this.responseText);
    myFunctionTwo(valTwo);
  }
};
xmlhttp.open("GET", urlTwo, true);
xmlhttp.send();

function myFunctionTwo(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("twoBtn").innerHTML = "Offline";
  document.getElementById("twoBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("twoCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("twoImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url'];
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("twoSpan");  

    document.getElementById("twoBtn").innerHTML = "Online";
    document.getElementById("twoLink").href = result;
    document.getElementById("twoText").innerHTML= status + "...";
    document.getElementById("twoView").innerHTML = view;
    document.getElementById("twoBtn").style.backgroundColor = "RGB(118,173,141)";
    document.getElementById("twoCard").style.border= '4px solid RGB(118,173,141)';
    document.getElementById("twoImage").style.border= '4px solid RGB(118,173,141)';
    hidden.style.display = "flex";
    };
}

// 3
xmlhttp = new XMLHttpRequest();
var urlThree = "https://wind-bow.glitch.me/twitch-api/streams/mikemcdonaldpoker";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valThree = JSON.parse(this.responseText);
    myFunctionThree(valThree);
  }
};
xmlhttp.open("GET", urlThree, true);
xmlhttp.send();

function myFunctionThree(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("threeBtn").innerHTML = "Offline";
  document.getElementById("threeBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("threeCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("threeImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url'];
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("threeSpan"); 
     
    document.getElementById("threeText").innerHTML= status + "...";
    document.getElementById("threeBtn").innerHTML = "Online";
    document.getElementById("threeLink").href = result;
    document.getElementById("threeView").innerHTML = view;
    document.getElementById("threeBtn").style.backgroundColor = "RGB(118,173,141)";
    document.getElementById("threeCard").style.border= '4px solid RGB(118,173,141)';
    document.getElementById("threeImage").style.border= '4px solid RGB(118,173,141)';
    hidden.style.display = "flex";
    };
}
// 4
xmlhttp = new XMLHttpRequest();
var urlFour = "https://wind-bow.glitch.me/twitch-api/streams/kevinmartin987";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valFour = JSON.parse(this.responseText);
    myFunctionFour(valFour);
  }
};
xmlhttp.open("GET", urlFour, true);
xmlhttp.send();

function myFunctionFour(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("fourBtn").innerHTML = "Offline";
  document.getElementById("fourBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("fourCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("fourImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url'];
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("fourSpan");

    document.getElementById("fourBtn").innerHTML = "Online";
    document.getElementById("fourText").innerHTML= status + "...";
    document.getElementById("fourLink").href = result;
    document.getElementById("fourView").innerHTML = view;
    hidden.style.display = "flex";
   document.getElementById("fourBtn").style.backgroundColor = "RGB(118,173,141)";
   document.getElementById("fourCard").style.border= '4px solid RGB(118,173,141)';
   document.getElementById("fourImage").style.border= '4px solid RGB(118,173,141)';
    };
}
// 5
xmlhttp = new XMLHttpRequest();
var urlFive = "https://wind-bow.glitch.me/twitch-api/streams/tonkaaaap";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valFive = JSON.parse(this.responseText);
    myFunctionFive(valFive);
  }
};
xmlhttp.open("GET", urlFive, true);
xmlhttp.send();

function myFunctionFive(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("fiveBtn").innerHTML = "Offline";
  document.getElementById("fiveBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("fiveCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("fiveImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url'];
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("fiveSpan");  

    document.getElementById("fiveBtn").innerHTML = "Online";
    document.getElementById("fiveText").innerHTML= status + "...";
    document.getElementById("fiveLink").href = result;
    document.getElementById("fiveView").innerHTML = view;
    document.getElementById("fiveBtn").style.backgroundColor = "RGB(118,173,141)";
    document.getElementById("fiveCard").style.border= '4px solid RGB(118,173,141)';
    document.getElementById("fiveImage").style.border= '4px solid RGB(118,173,141)';
    hidden.style.display = "flex";
    };
}

// 6
xmlhttp = new XMLHttpRequest();
var urlSix = "https://wind-bow.glitch.me/twitch-api/streams/lexveldhuis";

xmlhttp.onreadystatechange = function(){
  if( this.readyState = 4 && this.status == 200) {
    var valSix = JSON.parse(this.responseText);
    myFunctionSix(valSix);
  }
};
xmlhttp.open("GET", urlSix, true);
xmlhttp.send();

function myFunctionSix(val){
  var state = val.stream;
 
  if( state === null){
  document.getElementById("sixBtn").innerHTML = "Offline";
  document.getElementById("sixBtn").style.backgroundColor = "RGB(186,58,64)";
  document.getElementById("sixCard").style.border= '4px solid RGB(186,58,64)';
  document.getElementById("sixImage").style.border= '4px solid RGB(186,58,64)';
  }
  else{
    var result = val.stream.channel['url'];
    var status = val.stream.channel['status'];
    status = status.slice(0,25).toUpperCase();
    var view = val.stream['viewers'];
    var hidden = document.getElementById("sixSpan");  

    document.getElementById("sixBtn").innerHTML = "Online";
    document.getElementById("sixText").innerHTML= status + "...";
    document.getElementById("sixLink").href = result;
    document.getElementById("sixView").innerHTML = view;
    document.getElementById("sixBtn").style.backgroundColor = "RGB(118,173,141)";
    document.getElementById("sixCard").style.border= '4px solid RGB(118,173,141)';
    document.getElementById("sixImage").style.border= '4px solid RGB(118,173,141)';
    hidden.style.display = "flex";
    };
}




