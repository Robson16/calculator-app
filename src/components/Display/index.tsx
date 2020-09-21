import React from "react";

import "./styles.css";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;
