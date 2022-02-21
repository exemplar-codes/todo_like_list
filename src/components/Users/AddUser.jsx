import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import "./AddUser.css";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault(); // stop the request
  };

  return (
    <Card>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label name="age">Age (Years)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
