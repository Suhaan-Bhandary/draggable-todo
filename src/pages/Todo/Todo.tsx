import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import { TodoData } from "../../types/todo.types";
import styles from "./Todo.module.css";

function Todo() {
  const [data] = useState<TodoData>([
    {
      title: "Todo",
      cards: [
        {
          content: "1",
          date: "01/01/2022",
        },
        {
          content: "2",
          date: "01/01/2022",
        },
        {
          content: "3",
          date: "01/01/2022",
        },
      ],
    },
    {
      title: "Doing",
      cards: [],
    },
    {
      title: "Done",
      cards: [],
    },
  ]);

  return (
    <div className={styles.Todo}>
      <div className="container">
        <h1>Draggable Todo</h1>
        <div className={styles.TodoContainer}>
          {data.map((section) => (
            <CardList section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
