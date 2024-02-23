import React, { useState } from 'react';
import './App.css';

function App() {

  // {/* //定义状态
  //     // 状态一：单个棋盘格子内的棋子
  const [chess, setChess] = useState(0);

  //     //组件一：棋盘格子 */}
  function Square({ value, onSqClick }) {
    return (<button onClick={handleClick}>{value}</button>)
  }

  let str = chess;

  function handleClick() {
    setChess(1)
    console.log("click");
  }

  return (
    <>
      <div className="board-row">
        <Square value={str} onSqClick={handleClick} />
        <Square value={str} />
        <Square value={str} />
      </div>
      <div className="board-row">
        <Square value={str} />
        <Square value={str} />
        <Square value={str} />
      </div>{" "}
      <div className="board-row">
        <Square value={str} />
        <Square value={str} />
        <Square value={str} />
      </div>
    </>
  );

}

export default App;
