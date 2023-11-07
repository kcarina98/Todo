import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <section>
      {props.items?.map((item, key) => (
        <ToDoItem todo={item} key={key} />
      ))}
    </section>
  );
}
