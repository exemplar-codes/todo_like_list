import React from "react";
import AgeModal from "./AgeModal";
import BlankParamModal from "./BlankParamModal";

function ControllerModal(props) {
  switch (props.whichModal) {
    case "blank age":
      return <BlankParamModal word={["age"]} />;
    case "blank name":
      return <BlankParamModal word={["name"]} />;
    case "blank name and age":
      return <BlankParamModal word={["name", "age"]} />;
    case "age < 1":
      return <AgeModal />;
    default:
      return <div></div>;
  }
}

export default ControllerModal;
