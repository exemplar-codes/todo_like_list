import "./App.css";
import Display from "./components/Display/Display";
import AddUser from "./components/Users/AddUser";

let entries = [
  { name: "Sanjar", age: 24, id: 1 },
  { name: "Ahmar", age: 19, id: 2 },
];

function App() {
  return (
    <div>
      <AddUser />
      <Display entries={entries} />
    </div>
  );
}

export default App;
