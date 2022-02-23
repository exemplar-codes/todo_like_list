import React from "react";

import PropTypes from "prop-types";

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

BlankParamModal.propTypes = {
  words: PropTypes.array.isRequired,
};
