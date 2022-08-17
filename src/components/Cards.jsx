import React from "react";
import Card from "./Card";

const Cards = ({ version }) => {
  return (
    <div className="cards-container">
      {version.cards.map((cardLink, index) => (
        <Card key={index} imgLink={cardLink} />
      ))}
    </div>
  );
};

export default Cards;
