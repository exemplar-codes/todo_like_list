import React from "react";
import ModalWrapper from "./ModalWrapper";

function AgeModal(props) {
  return (
    <ModalWrapper>
      <div>
        <span className="red">Age</span> should be &gt;= 1
      </div>
    </ModalWrapper>
  );
}

export default AgeModal;
