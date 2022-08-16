import React, { useState, useEffect } from "react";
import Versions from "./Versions";

const Game = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [version, setVersion] = useState({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <main className="game">
      <h2>Select game version you want to play!</h2>
      <Versions />
    </main>
  );
};

export default Game;
