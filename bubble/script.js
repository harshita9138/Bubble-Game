alert("You have to click the same value of bubble which is being shown as value of Hit till the timer stops.Best of luck !");

function makebubble(){
    var bubbly="";
for(var i=1;i<=84;i++){
    bubblyi=Math.floor(Math.random()*10);
    bubbly+=` <div class="bubble">${bubblyi}</div>`;
}
document.querySelector("#pannelbot").innerHTML=bubbly;
}
makebubble();



var timer=30;
function runTimer(){
    var timerint = setInterval(function(){
if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
}else{
    clearInterval(timerint );
    document.querySelector("#pannelbot").innerHTML=`<h1>Game Over and your total Score is ${score} </h1>`
    // document.querySelector("#pannelbot").innerHTML=`  <button>Start Again</button>
}
    },1000);
}
runTimer();

var values="";
function makeHit(){
values=Math.floor(Math.random()*10);
document.querySelector("#valhit").textContent=values;
}
makeHit();

var score=0;
function scoreIncrease(){
    score +=10;
    document.querySelector("#scores").textContent=score;
}

// event bubbling used - isme ye hota hai ki jis element par chalti hai uske event listener ko run karaati hai aur agar us pr event listener nhi hai
// to uske parent ko dekhti hai aur agar usme event listener hai to run kararti hai nhi to phir uske parent pr search krti hai

document.querySelector("#pannelbot").addEventListener("click",function(details){
var numClicked=Number(details.target.textContent);
if(numClicked===values){
    scoreIncrease();
    makebubble();
    makeHit();
}

});
