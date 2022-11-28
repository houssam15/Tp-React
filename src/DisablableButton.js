import React, { useState } from "react";

import "./styles.css";

function DisablableButton(para) {
  const [isD, setIsD] = useState(0);

  const handleClick = () => {
    setIsD(1);
  };

  return (
    <button
      disabled={isD}
      className="pure-material-button"
      onClick={() => handleClick()}
    >
      {para.text}
    </button>
  );
}

export default DisablableButton;
