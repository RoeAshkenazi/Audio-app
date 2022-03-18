import "./App.css";
import React, { useRef, useState } from "react";

import { src1, src2, src3, src4, src5, src6, src7, src8 } from "./sounds";

import styles from "./styles/Home.module.css";
import { AudioPlayer } from "./components/AudioPlayer";
import { Commands } from "./components/Commands";

function App() {
  
  const audioref = useRef();

  const [playing, setPlaying] = useState(false);
  const [Loop, setLoop] = useState(true);

  return (
    <div className="App">
      <AudioPlayer ref={audioref} src={src1} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src2} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src3} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src4} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src5} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src6} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src7} playing={playing} isLoop={Loop}></AudioPlayer>
      <AudioPlayer ref={audioref} src={src8} playing={playing} isLoop={Loop}></AudioPlayer>
      <Commands onPress={(value) => setPlaying(value)} onLoopPress={(value) => setLoop(value)}></Commands>
    </div>
  );
}

export default App;
