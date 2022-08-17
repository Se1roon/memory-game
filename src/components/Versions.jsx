import React, { useState } from "react";
import { getVersions } from "../versions";
import Version from "./Version";
import PropTypes from "prop-types";

const Versions = ({ onVersionSelect }) => {
  const [versions, setVersions] = useState(getVersions());

  return (
    <ul className="version-selection">
      {versions.map((version) => (
        <Version
          key={version.id}
          version={version}
          onVersionSelect={() => onVersionSelect(version)}
        />
      ))}
    </ul>
  );
};

Versions.propTypes = {
  onVersionSelect: PropTypes.func.isRequired,
};

export default Versions;
