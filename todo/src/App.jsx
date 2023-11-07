import { useState } from "react";
import "./App.css";
import ToDoForm from "./assets/components/ToDoForm";
import ToDoList from "./assets/components/ToDoList";

function App() {
  const [todos, settodos] = useState([]);
  return (
    <>
      <ToDoForm settodos={settodos} />
      <ToDoList items={todos} />
    </>
  );
}

export default App;
