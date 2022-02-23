import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AgeModal from "./components/Modals/AgeModal";
import BlankParamModal from "./components/Modals/BlankParamModal";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BlankParamModal words={["name"]} />
  </React.StrictMode>,
  document.getElementById("root")
);
