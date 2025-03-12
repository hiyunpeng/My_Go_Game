
document.addEventListener("DOMContentLoaded", () => {
    // Create Undo Button
    const undoButton = document.createElement("button");
    undoButton.innerText = "悔棋 (Undo)";
    undoButton.style.position = "absolute";
    undoButton.style.top = "500px";
    undoButton.style.left = "1200px";
    undoButton.style.padding = "10px";
    undoButton.style.fontSize = "16px";
    document.body.appendChild(undoButton);
    undoButton.addEventListener("click", undoMove);

    // Create Capture Counter Display
    const captureCounter = document.createElement("div");
    captureCounter.id = "capture-counter";
    captureCounter.style.position = "absolute";
    captureCounter.style.top = "150px";
    captureCounter.style.left = "1200px";
    captureCounter.style.fontSize = "18px";
    captureCounter.style.fontWeight = "bold";
    captureCounter.innerHTML = "黑棋俘获 Black Capture: 0<br>白棋俘获 White Capture: 0";
    document.body.appendChild(captureCounter);

    // Create Restart Button
    const restartButton = document.createElement("button");
    restartButton.innerText = "重新开始 (Restart)";
    restartButton.style.position = "absolute";
    restartButton.style.top = "560px";
    restartButton.style.left = "1200px";
    restartButton.style.padding = "10px";
    restartButton.style.fontSize = "16px";
    document.body.appendChild(restartButton);
    restartButton.addEventListener("click", restartGame);

    // Create Quit Game Button
    const quitButton = document.createElement("button");
    quitButton.innerText = "退出游戏 (Quit Game)";
    quitButton.style.position = "absolute";
    quitButton.style.top = "620px"; // Position below the Restart button
    quitButton.style.left = "1200px";
    quitButton.style.padding = "10px";
    quitButton.style.fontSize = "16px";
    document.body.appendChild(quitButton);
    quitButton.addEventListener("click", quitGame);

});



let blackCaptures = 0;
let whiteCaptures = 0;
let captureHistory = [];

function updateCaptureCounter() {
    document.getElementById("capture-counter").innerHTML = `黑棋俘获 Black Capture: ${blackCaptures}<br>白棋俘获 White Capture: ${whiteCaptures}`;
}

function removeCapturedStones(group) {
    let blackCaptured = 0;
    let whiteCaptured = 0;
    group.forEach(([row, col]) => {
        if (board[row][col] === "black") whiteCaptured++;
        else if (board[row][col] === "white") blackCaptured++;
        board[row][col] = null;
    });
    captureHistory.push({ black: blackCaptures, white: whiteCaptures });
    blackCaptures += blackCaptured;
    whiteCaptures += whiteCaptured;
    updateCaptureCounter();
}

function undoMove() {
    if (boardHistory.length < 2 || captureHistory.length < 1) {
        alert("无法悔棋 (No moves to undo)");
        return;
    }
    
    boardHistory.pop(); // Remove current state
    const previousState = boardHistory[boardHistory.length - 1];
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = previousState[i][j];
        }
    }
    
    // Restore previous capture count
    const previousCaptures = captureHistory.pop();
    if (previousCaptures) {
        blackCaptures = previousCaptures.black;
        whiteCaptures = previousCaptures.white;
        updateCaptureCounter();
    }
    
    moveRecord.pop();
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    drawBoard();
}

function restartGame() {
    if (!confirm("确定要重新开始吗？Are you sure to restart the game")) return;

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = null;
        }
    }

    moveRecord = [];
    boardHistory = [];
    currentPlayer = "black";
    drawBoard();
    updateGameStatus();
}


function quitGame() {
    if (!confirm("确定要退出吗？Are you sure to quit the game and return to the start menu?")) return;
        window.location.href = "index.html"
}

function updateGameStatus() {
    const status = document.getElementById("game-status");
    status.innerText = `当前回合: ${moveRecord.length} - 轮到 ${currentPlayer === 'black' ? "黑棋" : "白棋"}`;
}

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    drawBoard(); // Redraw to clear previous hover
    if (board[row][col] === null) {
        ctx.globalAlpha = 0.5; // Make it transparent
        drawStone(row, col, currentPlayer);
        ctx.globalAlpha = 1.0;
    }
});