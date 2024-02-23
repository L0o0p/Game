import React, { useState } from 'react';
import './App.css';

function App() {

  //定义状态
  // 状态一chessLayout:整个棋盘的布局（每个Box的落子情况列表）
  const [chessLayout, setChesslayout] = useState(Array(9).fill(0));

  //  组件一：棋盘格子 
  function Box({ value, onBoxClick }) {
    return (<button onClick={onBoxClick}>{value}</button>)
  }

  // let str = chessLayout;

  function changeEvent(i) {
    const newchessLayout = chessLayout.slice()
    newchessLayout[i] = 1
    setChesslayout(newchessLayout)
    console.log("click");
  }

  return (
    <>
      <div className="board-row">
        <Box value={chessLayout[0]} onBoxClick={() => changeEvent(0)} />
        <Box value={chessLayout[1]} onBoxClick={() => changeEvent(1)} />
        <Box value={chessLayout[2]} onBoxClick={() => changeEvent(2)} />
      </div>
      <div className="board-row">
        <Box value={chessLayout[3]} onBoxClick={() => changeEvent(3)} />
        <Box value={chessLayout[4]} onBoxClick={() => changeEvent(4)} />
        <Box value={chessLayout[5]} onBoxClick={() => changeEvent(5)} />
      </div>
      <div className="board-row">
        <Box value={chessLayout[6]} onBoxClick={() => changeEvent(6)} />
        <Box value={chessLayout[7]} onBoxClick={() => changeEvent(7)} />
        <Box value={chessLayout[8]} onBoxClick={() => changeEvent(8)} />
      </div>
    </>
  );

}

export default App;
