import React from "react";

const Card = ({ imgLink, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {/* <img src={imgLink} alt="card" />
       */}
      {imgLink}
    </div>
  );
};

export default Card;
