import React from "react";

import "./Display.css";
import Entry from "./Entry";

function Display(props) {
  return (
    <div className="display">
      {props.entries.map((entry) => (
        <Entry
          onRemoveEntryDataHandler={props.removeEntryDataHandler}
          key={entry.id}
          id={entry.id}
          name={entry.name}
          age={entry.age}
        />
      ))}
    </div>
  );
}

export default Display;
