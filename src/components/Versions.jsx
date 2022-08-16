import React, { useState } from "react";
import { getVersions } from "../versions";
import Version from "./Version";

const Versions = () => {
  const [versions, setVersions] = useState(getVersions());

  return (
    <ul className="version-selection">
      {versions.map((version) => (
        <Version key={version.name} versionName={version.name} />
      ))}
    </ul>
  );
};

export default Versions;
