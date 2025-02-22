document.addEventListener("DOMContentLoaded", () => {
    const undoButton = document.createElement("button");
    undoButton.innerText = "悔棋 (Undo)";
    undoButton.style.position = "absolute";
    undoButton.style.top = "10px";
    undoButton.style.right = "10px";
    undoButton.style.padding = "10px";
    undoButton.style.fontSize = "16px";
    
    document.body.appendChild(undoButton);
    undoButton.addEventListener("click", undoMove);
});

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