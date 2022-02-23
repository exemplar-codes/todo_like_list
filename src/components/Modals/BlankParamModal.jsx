import React from "react";
import Card from "../UI/Card";

function BlankParamModal(props) {
  return (
    <div>
      {props.words.map((word, index) => (
        <Card key={word}>
          {word} is blank
          {props.words.length > 1
            ? index !== props.words.length - 1
              ? ", "
              : ""
            : ""}
        </Card>
      ))}
    </div>
  );
}

export default BlankParamModal;
