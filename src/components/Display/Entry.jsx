import React from "react";
import Card from "../UI/Card";

import "./Entry.css";

function Entry(props) {
  return (
    <div
      onClick={() => {
        props.onRemoveEntryDataHandler(props.id);
      }}
    >
      <Card className="entry">
        <span className="name">{props.name}</span>{" "}
        <span className="age">{props.age}</span>
      </Card>
    </div>
  );
}

export default Entry;
