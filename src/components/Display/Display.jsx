import React from "react";
import Card from "../UI/Card";

import "./Display.css";
import Entry from "./Entry";

let entries = [{ name: "Sanjar", age: 24, id: 2 }];

function Display() {
  return (
    <div className="display">
      {entries.map((entry) => (
        <Entry key={entry.id} name={entry.name} age={entry.age} />
      ))}
    </div>
  );
}

export default Display;
