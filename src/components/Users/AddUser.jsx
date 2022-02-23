import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI/Button";
import Card from "../UI/Card";

import "./AddUser.css";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault(); // stop the request

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
      props.addEntryDataHandler(enteredUsername.trim(), enteredAge.trim());

      // reset on submission
      setEnteredUserName("");
      setEnteredAge("");
    }
  };

  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUsername}
        />
        <label name="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
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
