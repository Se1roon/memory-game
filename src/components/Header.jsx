import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, home }) => {
  return (
    <header className="header">
      <h1>{home ? <a href="/memory-game/">{text}</a> : text}</h1>
    </header>
  );
};

Header.defaultProps = {
  home: false,
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
