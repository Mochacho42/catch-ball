// paddle.keyDownHandler();
// paddle.keyUpHandler();

//passing critical values to calcScore
//needs to be dynamic (same problem as addEventListener)

var ball = new Ball();
var paddle = new Paddle();
var score = new Score();
var counter = 500;

paddle.movement();

drawTime = function() {
  ctx.font = "16px Times";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Temps restant : " + counter, 10, 45);
}

function draw() {
  movePaddle();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.drawBall();
  ball.moveBall();
  paddle.drawPaddle();
  score.drawScore();
  //changingScore();
  score.calcScore(ball, paddle);
  drawTime();
  counter -= 1;
  console.log(counter)
  if(counter == 0) {
	  console:log("end")
	  document.location.reload();
	  counter == 500
  }
}

setInterval(draw);
