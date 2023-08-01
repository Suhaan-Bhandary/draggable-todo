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

  const handleCardAdd = () => {
    if (!todo.length) return;

    addCardToTodoSection(todo);
    setTodo("");
  };

  return (
    <div className={styles.addTodoContainer}>
      <input
        type="text"
        value={todo}
        onChange={handleTodoChange}
        placeholder="Add a todo..."
      />
      <button onClick={handleCardAdd}>Add</button>
    </div>
  );
}

export default TodoCardInput;
