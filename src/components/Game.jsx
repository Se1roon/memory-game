import React, { useState, useEffect } from "react";
import Versions from "./Versions";
import Header from "./Header";
import Cards from "./Cards";
import changeIndexes from "../shuffleItems";

const Game = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [version, setVersion] = useState();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);

  const handleVersionSelection = (version) => {
    setVersion(version);
    setPlaying(true);

    document.querySelector(".game").classList.add("active");
  };

  const handleCardClick = (card) => {
    if (cardsClicked.includes(card)) {
      console.log("Loss");
      return;
    }

    const cardsClickedCopy = [...cardsClicked];
    cardsClickedCopy.push(card);

    setCardsClicked(cardsClickedCopy);
    shuffle();
  };

  const shuffle = () => {
    const cards = [...version.cards];
    changeIndexes(cards);

    const newVersion = {
      ...version,
      cards,
    };

    setVersion(newVersion);
  };

  const renderVersionSelection = () => {
    return (
      <React.Fragment>
        <h2>Select game version you want to play!</h2>
        <Versions onVersionSelect={handleVersionSelection} />
      </React.Fragment>
    );
  };

  const renderGame = () => {
    return (
      <React.Fragment>
        <Header text={version.name} />
        <Cards version={version} onClick={handleCardClick} />
      </React.Fragment>
    );
  };

  return (
    <main className="game">
      {!isPlaying ? renderVersionSelection() : renderGame()}
    </main>
  );
};

export default Game;
