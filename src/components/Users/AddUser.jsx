import React, { useRef } from "react";
import PropTypes from "prop-types";

import Button from "../UI/Button";
import Card from "../UI/Card";

import "./AddUser.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault(); // stop the request

    let enteredUsername = nameInputRef.current.value,
      enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0) {
      if (enteredAge.trim().length === 0) {
        props.showModalHandler("blank name and age");
      } else if (enteredAge.trim().length !== 0)
        props.showModalHandler("blank name");
    } else if (enteredAge.trim().length === 0) {
      props.showModalHandler("blank age");
    } else if (Number(enteredAge.trim()) < 1) {
      props.showModalHandler("age < 1");
    } else {
      props.addEntryDataHandler(
        enteredUsername.trim(),
        Number(enteredAge.trim())
      );

      // reset on submission
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <Card>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />
        <label name="age">Age (Years)</label>
        <input type="number" id="age" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;

AddUser.propTypes = {
  addEntryDataHandler: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
};
