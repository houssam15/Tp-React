import React, { useState } from "react";

import TextInputEx6 from "./TextInputEx6";

import "./styles.css";

function NewPeople(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleLastNameChange(para) {
    setLastName(para.target.value);
  }

  function handleFirstNameChange(para) {
    setFirstName(para.target.value);
  }

  return (
    <div>
      <TextInputEx6
        id="lastName"
        value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />
      <TextInputEx6
        id="firstName"
        value={firstName}
        onChange={(e) => handleFirstNameChange(e)}
      />
      <p>
        Bonjour {firstName} {lastName}
      </p>
    </div>
  );
}

export default NewPeople;
