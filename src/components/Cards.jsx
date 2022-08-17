import React from "react";
import Card from "./Card";

const Cards = ({ version, onClick }) => {
  return (
    <div className="cards-container">
      {version.cards.map((cardLink, index) => (
        <Card key={index} imgLink={cardLink} onClick={onClick} />
      ))}
    </div>
  );
};

export default Cards;
