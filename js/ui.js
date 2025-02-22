
document.addEventListener("DOMContentLoaded", () => {
    // Create Undo Button
    const undoButton = document.createElement("button");
    undoButton.innerText = "悔棋 (Undo)";
    undoButton.style.position = "absolute";
    undoButton.style.top = "500px";
    undoButton.style.right = "300px";
    undoButton.style.padding = "10px";
    undoButton.style.fontSize = "16px";
    document.body.appendChild(undoButton);
    undoButton.addEventListener("click", undoMove);

    // Create Capture Counter Display
    const captureCounter = document.createElement("div");
    captureCounter.id = "capture-counter";
    captureCounter.style.position = "absolute";
    captureCounter.style.top = "150px";
    captureCounter.style.left = "100px";
    captureCounter.style.fontSize = "18px";
    captureCounter.style.fontWeight = "bold";
    captureCounter.innerHTML = "黑棋俘获 Black Capture: 0<br>白棋俘获 White Capture: 0";
    document.body.appendChild(captureCounter);

    // Create Restart Button
    const restartButton = document.createElement("button");
    restartButton.innerText = "重新开始 (Restart)";
    restartButton.style.position = "absolute";
    restartButton.style.top = "560px";
    restartButton.style.right = "260px";
    restartButton.style.padding = "10px";
    restartButton.style.fontSize = "16px";
    document.body.appendChild(restartButton);
    restartButton.addEventListener("click", restartGame);
});

let blackCaptures = 0;
let whiteCaptures = 0;

function updateCaptureCounter() {
    document.getElementById("capture-counter").innerHTML = `黑棋俘获 Black Capture: ${blackCaptures}<br>白棋俘获 White Capture: ${whiteCaptures}`;
}


function removeCapturedStones(group) {
    group.forEach(([row, col]) => {
        if (board[row][col] === "black") whiteCaptures++;
        else if (board[row][col] === "white") blackCaptures++;
        board[row][col] = null;
    });
    updateCaptureCounter();
}


function undoMove() {
    if (boardHistory.length < 2) {
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

function updateGameStatus() {
    const status = document.getElementById("game-status");
    status.innerText = `当前回合: ${moveRecord.length} - 轮到 ${currentPlayer === 'black' ? "黑棋" : "白棋"}`;
}

