import React from "react";

const Card = ({ imgLink }) => {
  return (
    <div className="card">
      {/* <img src={imgLink} alt="card" />
       */}
      {imgLink}
    </div>
  );
};

export default Card;
