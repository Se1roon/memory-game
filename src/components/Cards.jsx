import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ version, onClick }) => {
  return (
    <div className="cards-container">
      {version.cards.map((cardLink, index) => (
        <Card key={index} imgLink={cardLink} onClick={onClick} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  version: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cards;
