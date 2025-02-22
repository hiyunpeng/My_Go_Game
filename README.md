## My Go Game 简易双人围棋

This is a **web-based player-to-player Go game** implementation with interactive UI features, including:
- **Undo function** to revert the last move.
- **Restart button** to reset the game.
- **Capture counter** to track captured stones.
- **Local play** without requiring internet, login, or registration.

### About
This game is designed for **offline play**, making it ideal for situations where an internet connection is unavailable. It was inspired by experiences of traveling by train, where poor Wi-Fi made it difficult to play online Go games on any device.

### Features
- **Go Board (19x19)**: Implements a standard Go board with star points.
- **Move Placement**: Players can click to place stones.
- **Undo**: Allows undoing the last move.
- **Restart Game**: Resets the board to start a new game.
- **Capture Counter**: Displays captured stones for both players.
- **Ko Rule Handling**: Prevents immediate repetition of previous board states, which is the hardest part of the game.
- **Save & Load Game**: Automatically saves progress using local storage.
- **Hover Effect**: Shows a preview of stone placement before committing a move.

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/go-game.git
   ```
2. Navigate into the project folder:
   ```sh
   cd MyGoGame
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
📂 MyGoGame
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
