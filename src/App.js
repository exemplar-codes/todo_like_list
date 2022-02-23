import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import BlankParam from "./components/Modals/BlankParamModal";
import AddUser from "./components/Users/AddUser";

let entries = [
  { name: "Sanjar", age: 24, id: 1 },
  { name: "Ahmar", age: 19, id: 2 },
];

function App() {
  const [addedEntries, setAddedEntries] = useState(entries);

  const [showModal, setShowModal] = useState(false); // have multiple modals from here

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const addEntryDataHandler = (enteredUsername, enteredAge) => {
    setAddedEntries((prevEntries) => [
      ...prevEntries,
      {
        name: enteredUsername,
        age: enteredAge,
        id: prevEntries.length + 1,
      },
    ]);
  };

  const removeEntryDataHandler = (id) => {
    setAddedEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  return showModal ? (
    <div>
      <AddUser
        addEntryDataHandler={addEntryDataHandler}
        forShowModal={showModalHandler}
      />
      <Display
        entries={addedEntries}
        removeEntryDataHandler={removeEntryDataHandler}
      />
    </div>
  ) : (
    <BlankParam />
  );
}

export default App;
