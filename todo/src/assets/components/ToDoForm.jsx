export default function ToDoForm(props) {
  function addToDo(e) {
    if (e.key === "Enter") {
      const task = taskBuilder(e.target.value);
      props.settodos((prev) => {
        return [...prev, e.target.value];
      });
      e.target.value = "";
    }
  }

  function taskBuilder(inputTask) {
    return {
      task: inputTask,
      done: false,
    };
  }

  return (
    <section className="to-do-form">
      <input onKeyDown={addToDo} type="text" name="task" />
    </section>
  );
}
