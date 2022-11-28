import React from "react";
import Button from "@material-ui/core/Button";

import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import DisablableButton from "./DisablableButton";
import NewPeople from "./NewPeople";
import NewPeopleEx6 from "./NewPeopleEx6";

import "./styles.css";

function App(para) {
  return (
    <div className="App">
      <h1>Exercice 1</h1>
      <CustomButton
        text="Click-me !"
        action={function (e) {
          alert("bonsoir ");
        }}
      />

      <h1>Exercice 2</h1>
      <TextInput />

      <h1>Exercice 3</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log("my name is houssam from consol :)")}
      >
        click-here
      </Button>

      <h1>Exercice 4</h1>
      <DisablableButton text="salam 1" />
      <DisablableButton text="salam 2" />
      <DisablableButton text="salam 3" />

      <h1>Exercice 5</h1>
      <NewPeople />

      <h1>Exercice 6</h1>
      <NewPeopleEx6 />
    </div>
  );
}

export default App;
