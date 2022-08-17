import React from "react";
import PropTypes from "prop-types";

const Card = ({ imgLink, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {/* <img src={imgLink} alt="card" />
       */}
      {imgLink}
    </div>
  );
};

Card.propTypes = {
  imgLink: PropTypes.number.isRequired, // TODO: Change this to string later
  onClick: PropTypes.func.isRequired,
};

export default Card;
