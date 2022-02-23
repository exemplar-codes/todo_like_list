import React from "react";
import Card from "../UI/Card";

import "./Entry.css";

const pluralizeYear = (years) => {
  return "year" + (years.toString() === "1" ? "" : "s");
};

function Entry(props) {
  return (
    <div
      onClick={() => {
        props.onRemoveEntryDataHandler(props.id);
      }}
      className="entry-border"
    >
      <Card className="entry">
        <span className="name">{props.name}</span> (
        <span className="age">{props.age}</span> {pluralizeYear(props.age)})
      </Card>
    </div>
  );
}

export default Entry;
