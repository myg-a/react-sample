/* eslint react-hooks/exhaustive-deps:off */

import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (0 < num && num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です!</ColofulMessage>
      <button onClick={onClickButton}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>（＾∇＾）</p>}
    </>
  );
};

export default App;
