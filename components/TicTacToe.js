import { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (!board[index]) {
      const newBoard = board.slice();
      newBoard[index] = xIsNext ? "X" : "O";
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-1 w-32">
      {board.map((cell, i) => (
        <button key={i} className="w-10 h-10 border" onClick={() => handleClick(i)}>
          {cell}
        </button>
      ))}
    </div>
  );
}
