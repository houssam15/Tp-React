import React from "react";

import "./styles.css";

function CustomButton(para) {
  return (
    <button className="pure-material-button" onClick={() => para.action()}>
      {para.text}
    </button>
  );
}

export default CustomButton;
