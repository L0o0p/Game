import React, { useState } from 'react';
import './App.css';
// 任务一：排布
// 任务二：数值可变
// 任务三：单位操作
// 任务四：交替落子
// 任务五：阻止覆盖：Box是否已落子判 + 断胜者是否决出 <-存在疑难:胜者定义函数的方法设定
// 任务六: 通知：下一位/宣告胜者
function App() {

  //定义状态
  // 状态一chessLayout:整个棋盘的布局（每个Box的落子情况列表）
  const [chessLayout, setChesslayout] = useState(Array(9).fill(0));
  // 状态二chAnge：交替落子(+/-)
  const [chAnge, setChange] = useState(true)

  //  组件一：棋盘格子 
  function Box({ value, onBoxClick }) {
    return (<button onClick={onBoxClick}>{value}</button>)
  }

  // let str = chessLayout;

  // 函数：胜者判断
  function ifWin(chessLayout) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (chessLayout[a] && chessLayout[a] === chessLayout[b] && chessLayout[a] === chessLayout[c]) {
        return chessLayout[a];
      }
    }
    return null;
  }

  // 函数：宣告胜者/同志下一位
  function Announcer() {
    let X
    chAnge ? X = '+' : X = '-'
    // eslint-disable-next-line no-useless-concat
    return "< turn to " + "'" + X + "'" + ">"
  }
  // 函数：响应事件
  function changeEvent(i) {
    const newchessLayout = chessLayout.slice()
    const ifNowwin = ifWin(newchessLayout)
    //根据当前chAnge状态 - 交替落子||是否已经决出胜负:如果位置已经有子/已决出则立即返回不执行操作
    if (newchessLayout[i] !== 0 || ifNowwin) { return }
    // 更新当前格子
    chAnge ? newchessLayout[i] = '+' : newchessLayout[i] = '-'
    // 更新棋局
    setChesslayout(newchessLayout)
    // 改变交替落子状态chAnge
    setChange(!chAnge)
    console.log("click");

  }

  return (
    <>
      <div className='Announcer'><Announcer /></div>
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
