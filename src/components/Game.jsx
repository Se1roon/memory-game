import React, { useState, useEffect } from "react";
import Versions from "./Versions";

const Game = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [version, setVersion] = useState();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleVersionSelection = (version) => {
    setVersion(version);
    setPlaying(true);
  };

  const renderVersionSelection = () => {
    return (
      <React.Fragment>
        <h2>Select game version you want to play!</h2>
        <Versions onVersionSelect={handleVersionSelection} />
      </React.Fragment>
    );
  };

  return (
    <main className="game">{!isPlaying ? renderVersionSelection() : null}</main>
  );
};

export default Game;
