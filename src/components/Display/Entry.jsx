import React from "react";
import Card from "../UI/Card";

function Entry(props) {
  return (
    <Card>
      {props.name} {props.age}
    </Card>
  );
}

export default Entry;
