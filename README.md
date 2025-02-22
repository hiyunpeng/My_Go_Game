## My Go Game 简易双人围棋

This is a web-based Go game implementation with interactive UI features, including an undo function, a restart button, a capture counter, and more.

### Features
- **Go Board (19x19)**: Implements a standard Go board with star points.
- **Move Placement**: Players can click to place stones.
- **Undo (悔棋)**: Allows undoing the last move.
- **Restart Game (重新开始)**: Resets the board to start a new game.
- **Capture Counter**: Displays captured stones for both players.
- **Ko Rule Handling**: Prevents immediate repetition of previous board states.
- **Save & Load Game**: Automatically saves progress using local storage.
- **Hover Effect**: Shows a preview of stone placement before committing a move.
- **Player Timer**: Tracks the time spent by each player.

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/go-game.git
   ```
2. Navigate into the project folder:
   ```sh
   cd go-game
   ```
3. Open `index.html` in your web browser.

### How to Play
1. Click on the board to place a stone.
2. Use the **悔棋 (Undo)** button to undo the last move.
3. Use the **重新开始 (Restart)** button to restart the game.
4. View the capture counter to track captured stones.
5. The game enforces the **Ko rule** to prevent infinite loops.

### File Structure
```
📂 go-game
├── 📂 css
│   ├── style.css   # Styles for the board and UI
├── 📂 js
│   ├── play.js     # Game logic (Go rules, board updates, move validation)
│   ├── ui.js       # UI logic (buttons, counter, timer, hover effect)
├── index.html      # Main game page
├── README.md       # Project documentation (this file)
```

### Contributing
Feel free to contribute by submitting **issues** or **pull requests**.

### License
This project is licensed under the **MIT License**.

### Contact
For any questions or feedback, reach out via **GitHub Issues**.