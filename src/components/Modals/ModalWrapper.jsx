import React from "react";
import Button from "../UI/Button";

import "./ModalWrapper.css";

function ModalWrapper(props) {
  return (
    <div className="modal-container">
          <div class="modal-wrapper">{props.children}</div>
          <Button onClick={props.removeModal}>Okay</Button>
    </div>
  );
}

export default ModalWrapper;
