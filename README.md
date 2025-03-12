## My Go Game 简易双人围棋

This is a **web-based player-to-player Go game** implementation with an interactive UI and enhanced features. The game is designed for **offline play**, making it ideal for situations where an internet connection is unavailable. It was inspired by experiences of traveling by train, where poor Wi-Fi made it difficult to play online Go games on any device.

## About
This project is a **standalone Go game** that runs entirely in the browser. It does not require an internet connection, login, or registration. The game is designed to be simple, intuitive, and accessible for players of all skill levels.

## Features
- **Go Board (19x19)**: Implements a standard Go board with star points.
- **Move Placement**: Players can click to place stones.
- **Undo Function**: Revert the last move with the **悔棋 (Undo)** button.
- **Restart Game**: Reset the board with the **重新开始 (Restart)** button.
- **Capture Counter**: Tracks captured stones for both players (黑棋俘获 Black Capture and 白棋俘获 White Capture).
- **Ko Rule Handling**: Prevents immediate repetition of previous board states.
- **Save & Load Game**: Automatically saves progress using local storage.
- **Hover Effect**: Shows a preview of stone placement before committing a move.
- **Front Page**: A welcoming page with options to **Start Game** or **Quit Game**.
- **Thank-You Page**: A page to thank players after quitting the game, with a link to return to the front page.
### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/go-game.git
   ```
2. Navigate into the project folder:
   ```sh
   cd MyGoGame
   ```
3. Type `index.html` in your terminal and the game will appear on your web browser.

### How to PlayStart Game: 

1. Click the Start Game button on the front page to begin.

2. Place Stones: Click on the board to place a stone with black goes first.

3. Undo Move: Use the 悔棋 (Undo) button to revert the last move.

4. Restart Game: Use the 重新开始 (Restart) button to reset the board.

5. Capture Counter: View the number of captured stones for both players.

6. Quit Game: Use the 退出游戏 (Quit Game) button to exit to the home page.

### File Structure
```
📂 MyGoGame
├── 📂 css
│   ├── style.css   # Styles for the board and UI
├── 📂 js
│   ├── play.js     # Game logic (Go rules, board updates, move validation)
│   ├── ui.js       # UI logic (buttons, counter, timer, hover effect)
|   |—— navigation.js
├── index.html              # Front page with Start Game and Quit Game buttons
├── game.html               # Main game page
├── thank-you.html          # Thank-you page after quitting the game
├── README.md               # Project documentation (this file)

```

### Contributing
Feel free to contribute by submitting **issues** or **pull requests**.

### License
This project is licensed under the **MIT License**.

### Contact
For any questions or feedback, reach out via **GitHub Issues**.
