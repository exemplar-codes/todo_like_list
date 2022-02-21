import React from "react";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault(); // stop the request
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label name="age">Age (Years)</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
