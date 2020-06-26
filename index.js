document.querySelector("h1").innerHTML="Refresh!!!";

document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");

document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");

var imgList = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var imgIndex1 =Math.floor( Math.random()*6);

var imgIndex2 = Math.floor(Math.random()*6);

document.querySelectorAll("img")[0].setAttribute("src",imgList[imgIndex1]);

document.querySelectorAll("img")[1].setAttribute("src",imgList[imgIndex2]);

if(imgIndex1===imgIndex2){

    document.querySelector("h1").innerHTML="Oh No!";

}else if(imgIndex1<imgIndex2){

    document.querySelector("h1").innerHTML="Player 2 wins";

}else{

    document.querySelector("h1").innerHTML="Player 1 wins";

}