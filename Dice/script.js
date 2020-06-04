var header = document.querySelector("h1");
var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);
var leftDice = document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var RightDice = document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
console.log(leftDice);

if(randomNumber1 === randomNumber2){
  header.innerText = "Draw!"
} else if (randomNumber1 > randomNumber2){
  header.innerText = "🚩 Player 1 Wins!"
} else {
  header.innerHTML = "Player 2 Wins! 🚩"
};

function reload (){
  location.reload();
}