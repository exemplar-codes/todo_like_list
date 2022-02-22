import React from "react";
import Card from "../UI/Card";

import "./Entry.css";

function Entry(props) {
  return (
    <Card className="entry">
      {props.name} {props.age}
    </Card>
  );
}

export default Entry;
