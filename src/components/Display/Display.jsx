import React from "react";
import PropTypes from "prop-types";

import "./Display.css";
import Entry from "./Entry";

function Display(props) {
  return (
    <ul className="display">
      {props.entries.map((entry) => (
        <li key={entry.id}>
          <Entry
            onRemoveEntryDataHandler={props.removeEntryDataHandler}
            id={entry.id}
            name={entry.name}
            age={entry.age}
          />
        </li>
      ))}
    </ul>
  );
}

export default Display;

Display.propTypes = {
  entries: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  removeEntryDataHandler: PropTypes.func.isRequired,
};
