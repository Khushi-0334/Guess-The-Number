let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const gameStatus = document.getElementById("gameStatus");

guessBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "❗ Enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    feedback.textContent = "🎉 Correct guess!";
    gameStatus.textContent = "You win!";
    endGame();
  } else if (guess < randomNumber) {
    feedback.textContent = "📉 Too low!";
  } else {
    feedback.textContent = "📈 Too high!";
  }

  if (attempts === maxAttempts && guess !== randomNumber) {
    feedback.textContent = "❌ You've used all your attempts.";
    gameStatus.textContent = "Game Over!";
    endGame();
  }

  guessInput.value = "";
  guessInput.focus();
});

resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsDisplay.textContent = "Attempts: 0";
  gameStatus.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.focus();
});

function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
}
