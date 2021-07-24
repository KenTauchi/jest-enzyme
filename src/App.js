import { useState } from "react";
import logo from "./logo.svg";
import Counter from "./components/counter/Counter";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onEdit = (e) => {
    setValue(e.target.value);
  };

  const onAdd = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  return (
    <div className="App">
      <Counter />
      <div style={{ marginTop: 20 }}>
        <input value={value} onChange={onEdit} id="input-field"></input>
        <button onClick={onAdd}>Add</button>
        <ul>{todos && todos.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
      </div>
    </div>
  );
}

export default App;
