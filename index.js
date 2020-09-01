var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2 = ((Math.floor(Math.random()*6)+1));
var newsrc1 = "dice" + randomNumber1 + ".png"; 
var src1 = "images/" + newsrc1 ; 
var newsrc2 = "dice" + randomNumber2 + ".png";
var src2 = "images/" + newsrc2 ;  



document.querySelector(".img1").setAttribute("src",src1);
document.querySelector(".img2").setAttribute("src",src2);

if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if ( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}