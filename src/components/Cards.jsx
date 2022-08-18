import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ version, onClick }) => {
  return (
    <div className="cards-container">
      {version.cards.map((card) => (
        <Card key={card.id} card={card} onClick={onClick} /> // TODO: Change imgLink to card.source
      ))}
    </div>
  );
};

Cards.propTypes = {
  version: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cards;
