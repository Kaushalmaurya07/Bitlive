let score = 0;
let timeLeft = 0;
let timerInterval;

function startGame() {
    score = 0;
    timeLeft = 5; // Set the game duration to 5 seconds
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("timer").innerText = "Time left: " + timeLeft + " seconds";
    document.getElementById("tapButton").disabled = false;
    document.getElementById("message").innerText = "Tap the button as fast as you can!";

    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText = "Time left: " + timeLeft + " seconds";
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function tap() {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById("tapButton").disabled = true;
    document.getElementById("message").innerText = "Time's up! Your final score is: " + score;
}
