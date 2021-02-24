var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceNumber1 = "dice" + randomNumber1 + ".png";

var imagesDiceFolder = "images/" + diceNumber1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesDiceFolder);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceNumber2 = "dice" + randomNumber2 + ".png";

var imagesDiceFolder2 = "images/" + diceNumber2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imagesDiceFolder2);

var targetHeader = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
  targetHeader.innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber1 === randomNumber2) {
  targetHeader.innerHTML = "It's a Tie!";
} else {
  targetHeader.innerHTML = "Player 2 Wins! 🚩";
}
