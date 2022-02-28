import React from "react";

import PropTypes from "prop-types";

import AgeModal from "./AgeModal";
import BlankParamModal from "./BlankParamModal";

function ControllerModal(props) {
  switch (props.whichModal) {
    case "blank age":
      return <BlankParamModal words={["age"]} removeModal={props.removeModal} />;
    case "blank name":
      return <BlankParamModal words={["name"]} removeModal={props.removeModal} />;
    case "blank name and age":
      return (
        <BlankParamModal words={["name", "age"]} removeModal={props.removeModal} />
      );
    case "age < 1":
      return <AgeModal removeModal={props.removeModal} />;
    default:
      return <div></div>;
  }
}

export default ControllerModal;

ControllerModal.propTypes = {
  whichModal: PropTypes.string.isRequired,
};
