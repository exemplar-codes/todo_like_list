import React from "react";

import "./ModalWrapper.css";

function ModalWrapper(props) {
  return (
    <div className="modal-container">
          <div class="modal-wrapper">{props.children}</div>
          <button className="modal-ok" onClick={props.removeModal}>Okay</button>
    </div>
  );
}

export default ModalWrapper;
