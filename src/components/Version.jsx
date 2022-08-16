import React from "react";
import PropTypes from "prop-types";

const Version = ({ version, onVersionSelect }) => {
  return (
    <li onClick={(version) => onVersionSelect(version)}>{version.name}</li>
  );
};

Version.propTypes = {
  version: PropTypes.object.isRequired,
  onVersionSelect: PropTypes.func.isRequired,
};

export default Version;
