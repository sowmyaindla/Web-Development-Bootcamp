var randomButtonColor = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keydown(function() {
  if(!started) {
    $("#level-title").text("Level" + level);
    flashRandomButton();
    started = true;
  }
});


$(".btn").click(function() {
  var color = $(this).attr("id");
  userClickedPattern.push(color);

  playSound(color);
  playGame(color);
  checkResult(userClickedPattern.length - 1);
});

function flashRandomButton () {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomButtonFlash = randomButtonColor[randomNumber];

  gamePattern.push(randomButtonFlash);
  $("#" + randomButtonFlash).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomButtonFlash);

}

function playGame(color) {

  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function checkResult(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        flashRandomButton();
      }, 1000);
    }
  } else {

    playSound("wrong");

    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    gameOver();
  }
}

function gameOver() {
  level = 0;
  started = false;
  gamePattern = [];
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
