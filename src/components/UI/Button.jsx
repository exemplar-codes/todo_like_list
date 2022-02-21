import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button class="button" type={props.buttom || "button"}>
      {props.children}
    </button>
  );
}

export default Button;
