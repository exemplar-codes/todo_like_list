import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import ControllerModal from "./components/Modals/ControllerModal";
import AddUser from "./components/Users/AddUser";

let entries = [
  { name: "Sanjar", age: 24, id: 1 },
  { name: "Ahmar", age: 19, id: 2 },
];

function App() {
  const [addedEntries, setAddedEntries] = useState(entries);

  const [showModal, setModal] = useState([false, ""]); // have multiple modals from here

  const showModalHandler = (modalType) => {
    setModal((prevShowModal) => [!prevShowModal[0], modalType]);
  };

  const removeModal = () => {
    setModal([false, ""]);
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

  return (
    <div>
      {showModal[0] && (
        <ControllerModal whichModal={showModal[1]} removeModal={removeModal} />
      )}
      <AddUser
        addEntryDataHandler={addEntryDataHandler}
        showModalHandler={showModalHandler}
      />
      <Display
        entries={addedEntries}
        removeEntryDataHandler={removeEntryDataHandler}
      />
    </div>
  );
}

export default App;
