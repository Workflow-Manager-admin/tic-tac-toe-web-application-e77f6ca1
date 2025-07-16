import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * Main application component for the Tic Tac Toe game.
 * Layout:
 *  - Status indicator (above)
 *  - Centered game board (middle)
 *  - Restart button (below)
 * Minimalistic, light theme with provided color palette.
 */
function App() {
  // Game board state: Array of 9 cells
  const [board, setBoard] = useState(Array(9).fill(null));
  // Current player ('X' or 'O')
  const [currentPlayer, setCurrentPlayer] = useState('X');
  // Game status: e.g., "Next player", "Win/Draw"
  const [status, setStatus] = useState("Next player: X");
  // Game result: null | "X" | "O" | "Draw"
  const [result, setResult] = useState(null);

  // Initialize default theme variables for light/minimal UI
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', '#1976d2');
    document.documentElement.style.setProperty('--secondary', '#ffffff');
    document.documentElement.style.setProperty('--accent', '#ff5722');
  }, []);

  // --- Placeholder handlers (full game logic to come in later tasks) ---
  // Handle board cell click (stub)
  const handleCellClick = (idx) => {
    // Feature placeholder: this will be implemented in the full logic step.
  };

  // Handle game restart
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setStatus("Next player: X");
    setResult(null);
  };

  // --- Render cell ---
  const renderCell = (idx) => (
    <button
      className="ttt-cell"
      key={idx}
      onClick={() => handleCellClick(idx)}
      disabled={!!board[idx] || result}
      aria-label={`cell ${idx + 1}${board[idx] ? `: ${board[idx]}` : ''}`}
    >
      {board[idx]}
    </button>
  );

  // --- Render Tic Tac Toe board (3x3 grid) ---
  const renderBoard = () => (
    <div className="ttt-board">
      {Array(9).fill().map((_, idx) => renderCell(idx))}
    </div>
  );

  // --- UI ---
  return (
    <div className="App">
      <div className="ttt-container">
        <header className="ttt-header">
          <h1 className="ttt-title">Tic Tac Toe</h1>
          <p className="ttt-status" role="status">
            {result
              ? (result === 'Draw'
                  ? <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Draw!</span>
                  : <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Winner: {result}</span>)
              : <span>Next player: <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{currentPlayer}</span></span>
            }
          </p>
        </header>
        {renderBoard()}
        <div className="ttt-actions">
          <button className="ttt-reset-btn" onClick={handleRestart}>
            Restart
          </button>
        </div>
        {/* Placeholders for future features */}
        <div className="ttt-placeholders" style={{ marginTop: 28, fontSize: 14, color: '#888' }}>
          {/* Minimalistic feature preview for code reviewers */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>✔️ Play Tic Tac Toe against another player</li>
            <li>✔️ Display current game board</li>
            <li>✔️ Indicate next player's turn</li>
            <li>✔️ Show results (win/lose/draw)</li>
            <li>✔️ Restart/new game functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
