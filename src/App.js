import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import AddUser from "./components/Users/AddUser";

let entries = [
  { name: "Sanjar", age: 24, id: 1 },
  { name: "Ahmar", age: 19, id: 2 },
];

function App() {
  const [addedEntries, setAddedEntries] = useState(entries);

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
      <AddUser addEntryDataHandler={addEntryDataHandler} />
      <Display
        entries={addedEntries}
        removeEntryDataHandler={removeEntryDataHandler}
      />
    </div>
  );
}

export default App;
