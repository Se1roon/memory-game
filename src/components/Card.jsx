import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {/* <img src={imgLink} alt="card" />
       */}
      {card.id}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired, // TODO: Change this to string later
  onClick: PropTypes.func.isRequired,
};

export default Card;
