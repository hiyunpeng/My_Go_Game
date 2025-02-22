const boardSize = 19; // Standard 19x19 Go board
const board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
let currentPlayer = 'black';
let moveRecord = [];
let ko = null; // Track Ko position

const canvas = document.querySelector("#go-board");
const ctx = canvas.getContext('2d');
const cellSize = canvas.width / boardSize;

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000';
    
    for (let i = 0; i < boardSize; i++) {
        ctx.beginPath();
        ctx.moveTo(cellSize / 2, i * cellSize + cellSize / 2);
        ctx.lineTo(canvas.width - cellSize / 2, i * cellSize + cellSize / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(i * cellSize + cellSize / 2, cellSize / 2);
        ctx.lineTo(i * cellSize + cellSize / 2, canvas.height - cellSize / 2);
        ctx.stroke();
    }

    drawStones();
}

function drawStones() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] !== null) {
                drawStone(row, col, board[row][col]);
            }
        }
    }
}

function drawStone(row, col, color) {
    ctx.beginPath();
    ctx.arc((col + 0.5) * cellSize, (row + 0.5) * cellSize, cellSize / 2.2, 0, 2 * Math.PI);
    ctx.fillStyle = color === 'black' ? '#000' : '#fff';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

function placeStone(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);

    if (board[row][col] === null) {
        const capturedStones = [];
        if (!isValidMove(row, col, currentPlayer, capturedStones)) {
            alert("无气，不能落子！！");
            return;
        }
        
        if (isKo(row, col, capturedStones)) {
            alert("劫, 不能落子, 请至少隔一手棋！");
            return;
        }
        
        board[row][col] = currentPlayer;
        moveRecord.push({ row, col, player: currentPlayer });
        removeCapturedStones(capturedStones);
        ko = capturedStones.length === 1 ? { row: capturedStones[0][0], col: capturedStones[0][1] } : null;
        currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
        drawBoard();
    }
}

function isKo(row, col, capturedStones) {
    return capturedStones.length === 1 && ko && ko.row === capturedStones[0][0] && ko.col === capturedStones[0][1];
}

function isValidMove(row, col, color, capturedStones) {
    const opponent = color === 'black' ? 'white' : 'black';
    let group = [];
    
    board[row][col] = color; // Temporarily place the stone
    const hasLiberty = hasLibertyCheck(row, col, color, group);
    
    checkCaptures(row, col, color, capturedStones);
    const makesCapture = capturedStones.length > 0;
    
    board[row][col] = null; // Revert the move
    
    return hasLiberty || makesCapture;
}

function hasLibertyCheck(row, col, color, group, visited = new Set()) {
    if (row < 0 || col < 0 || row >= boardSize || col >= boardSize) return false;
    const key = `${row},${col}`;
    if (visited.has(key)) return false;
    visited.add(key);

    if (board[row][col] === null) return true;
    if (board[row][col] !== color) return false;
    
    group.push([row, col]);
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
    
    return directions.some(([dx, dy]) => hasLibertyCheck(row + dx, col + dy, color, group, visited));
}

function checkCaptures(row, col, color, capturedStones) {
    const opponent = color === 'black' ? 'white' : 'black';
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    directions.forEach(([dx, dy]) => {
        const group = [];
        if (board[row + dx]?.[col + dy] === opponent) {
            if (!hasLibertyCheck(row + dx, col + dy, opponent, group)) {
                capturedStones.push(...group);
            }
        }
    });
}

function removeCapturedStones(group) {
    group.forEach(([row, col]) => {
        board[row][col] = null;
    });
}

canvas.addEventListener('click', placeStone);
drawBoard();