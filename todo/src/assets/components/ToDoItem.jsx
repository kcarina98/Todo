import { useState } from "react";

export default function ToDoItem({ todo }) {
  const [done, setDone] = useState(todo.done);
  function changeDone() {
    todo.done = !to.done;
    setDone(todo.done);
  }
  return (
    <section onClick={changeDone}>
      <p>{todo.task}</p>
    </section>
  );
}
