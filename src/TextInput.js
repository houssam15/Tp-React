import React, { useState } from "react";

import "./styles.css";

const TextInput = (props) => {
  const [typedText, setTypedText] = useState("");

  const handleTextChange = (event) => {
    setTypedText(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        value={typedText}
        onChange={(event) => handleTextChange(event)}
        type="text"
      />
      <h4>Texte saisie : {typedText}</h4>
    </div>
  );
};

export default TextInput;
