import React from "react";

const Scoreboard = ({ score, bestScore, isLoss }) => {
  return (
    <div className="scoreboard">
      {isLoss ? <p>You Lost!</p> : null}
      <div className="scoreboard__score-container">
        <h3 className="scoreboard__score">Score: {score}</h3>
        <h3 className="scoreboard__best-score">Best: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Scoreboard;
