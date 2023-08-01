import CardList from "../../components/CardList/CardList";
import styles from "./Todo.module.css";

function Todo() {
  return (
    <div className={styles.Todo}>
      <div className="container">
        <h1>Draggable Todo</h1>
        <div className={styles.TodoContainer}>
          <CardList />
          <CardList />
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default Todo;
