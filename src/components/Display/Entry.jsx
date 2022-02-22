import React from "react";
import Card from "../UI/Card";

import "./Entry.css";

function Entry(props) {
  return (
    <Card className="entry">
      <span className="name">{props.name}</span>{" "}
      <span className="age">{props.age}</span>
    </Card>
  );
}

export default Entry;
