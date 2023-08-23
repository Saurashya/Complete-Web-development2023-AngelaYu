const img1=document.getElementsByClassName('img1');
const img2=document.getElementsByClassName('img2');

const heading=document.getElementsByTagName('h1');

var index1=Math.random()*6;
var index2=Math.random()*6;

index1=Math.floor(index1)+1;
index2=Math.floor(index2)+1;

img1[0].setAttribute('src','images/dice'+index1+'.png');
img2[0].setAttribute('src','images/dice'+index2+'.png');

if(index1>index2){
    heading[0].innerHTML="Player 1 Wins!";
}
else if(index1==index2){
    heading[0].innerHTML="Draw!";
}
else{
heading[0].innerHTML="Player 2 Wins!";
}