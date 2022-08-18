import React from "react";

const Scoreboard = ({ score, bestScore, isLoss }) => {
  return (
    <div className="scoreboard">
      <p>{isLoss ? "You Lost!" : ""}</p>
      <div className="scoreboard__score-container">
        <h3 className="scoreboard__score">Score: {score}</h3>
        <h3 className="scoreboard__best-score">Best: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Scoreboard;
