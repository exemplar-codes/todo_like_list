import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import "./AddUser.css";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault(); // stop the request

    if (enteredUsername.length === 0 || enteredAge.length === 0) return; // don't do anything if blank

    props.addEntryDataHandler(enteredUsername, enteredAge);

    // reset on submission
    setEnteredUserName("");
    setEnteredAge("");
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
