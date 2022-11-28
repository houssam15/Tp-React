import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import "./styles.css";

function NewPeople(para1) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleLastNameChange(para2) {
    setLastName(para2.target.value);
  }

  function handleFirstNameChange(para2) {
    setFirstName(para2.target.value);
  }

  return (
    <div>
      <TextField
        id="lastName"
        value={lastName}
        label="Prénom"
        margin="normal"
        onChange={(e) => handleLastNameChange(e)}
      />
      <TextField
        id="firstName"
        value={firstName}
        label="Nom"
        margin="normal"
        onChange={(e) => handleFirstNameChange(e)}
      />
      <p>
        Bonjour {firstName} {lastName}
      </p>
    </div>
  );
}

export default NewPeople;
