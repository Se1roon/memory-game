import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={(card) => onClick(card)}>
      <img src={require(`../assets/images/${card.source}`)} alt={card.id} />
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
