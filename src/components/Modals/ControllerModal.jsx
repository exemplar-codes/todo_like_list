import React from "react";

import PropTypes from "prop-types";

import AgeModal from "./AgeModal";
import BlankParamModal from "./BlankParamModal";

function ControllerModal(props) {
  switch (props.whichModal) {
    case "blank age":
      return <BlankParamModal words={["age"]} />;
    case "blank name":
      return <BlankParamModal words={["name"]} />;
    case "blank name and age":
      return <BlankParamModal words={["name", "age"]} />;
    case "age < 1":
      return <AgeModal />;
    default:
      return <div></div>;
  }
}

export default ControllerModal;

ControllerModal.propTypes = {
  whichModal: PropTypes.func.isRequired,
};
