// JavaScript Logic
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restartPopup = document.getElementById("restartPopup");
const finalScore = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");
const menuButton = document.createElement("button");

// Create Menu Button
menuButton.id = "menuButton";
menuButton.textContent = "Menu";
menuButton.addEventListener("click", () => {
  window.location.href = "menu.html";
});
restartPopup.appendChild(menuButton);

function restartGame() {
  score = 0;
  enemies.length = 0;
  enemyBullets.length = 0;
  player.bullets.length = 0;
  coins.length = 0;
  gameOver = false;
  restartPopup.style.display = "none";

  bgMusic.currentTime = 0;
  bgMusic.play();
  gameLoop();
}

restartButton.addEventListener("click", restartGame);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlayer();
  drawEnemies();
  drawCoins();
  drawBullets();
  drawScore();

  moveBullets();
  moveEnemies();
  checkCollisions();

  if (gameOver) {
    finalScore.textContent = score;
    restartPopup.style.display = "block";
    bgMusic.pause();
  } else {
    requestAnimationFrame(gameLoop);
  }
}
