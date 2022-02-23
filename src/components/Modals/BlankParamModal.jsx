import React from "react";
import ModalWrapper from "./ModalWrapper";


function BlankParamModal(props) {
  return (
    <ModalWrapper>
      {props.words.map((word, index) => (
        <div key={word}>
          <span className="red">{word}</span> is blank
          {props.words.length > 1
            ? index !== props.words.length - 1
              ? ", "
              : ""
            : ""}
        </div>
      ))}
    </ModalWrapper>
  );
}

export default BlankParamModal;
