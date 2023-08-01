import { useState } from "react";
import styles from "./TodoCardInput.module.css";

type Props = {
  addCardToTodoSection: (content: string) => void;
};

function TodoCardInput({ addCardToTodoSection }: Props) {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!todo.length) return;

    addCardToTodoSection(todo);
    setTodo("");
  };

  return (
    <form className={styles.addTodoContainer} onSubmit={handleTodoSubmit}>
      <input
        type="text"
        value={todo}
        onChange={handleTodoChange}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoCardInput;
