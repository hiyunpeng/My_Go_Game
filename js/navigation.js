// Handle "Start Game" button click
document.getElementById("start-game")?.addEventListener("click", () => {
    console.log("Start Game button clicked"); // Debugging
    window.location.href = "game.html"; // Redirect to the game page
});

// Handle "Quit Game" button click
document.getElementById("quit-game")?.addEventListener("click", () => {
    console.log("Quit Game button clicked"); // Debugging
    window.location.href = "thankyou.html"; // Redirect to the thank-you page
});

// Handle "Return to Home" button click
document.getElementById("return-home")?.addEventListener("click", () => {
    console.log("Return Home button clicked"); // Debugging
    window.location.href = "index.html"; // Redirect to the front page
});