var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//autre variables
var score = 0;
var lives = 3;

// function changingScore() {
//   if(y + dy > canvas.height-1) {
//     if(x > paddleX && x < paddleX + paddleWidth) {
//       score++;
//     }
//     else {
//       lives--;
//       if(!lives) {
//         alert("GAME OVER");
//         document.location.reload();
//       }
//     }
//   }
// }

//bouton enfoncé

paddle.takeInput();
paddle.keyDownHandler();
paddle.keyUpHandler();

//bouton non enfoncé
function drawScore() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Score: " + score, 10, 20);
}

function drawLives() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Lives: " + lives, 10, 40);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  drawScore();
  drawLives();
  //changingScore();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
      paddleX += 4;
  }
  else if (leftPressed && paddleX > 0) {
      paddleX -= 4;
  }
}

setInterval(draw, 1);
