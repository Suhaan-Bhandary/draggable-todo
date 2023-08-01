import CardList from "../../components/CardList/CardList";
import useTodoData from "../../hooks/useTodoData";
import styles from "./Todo.module.css";

function Todo() {
  const { todoData, moveCardToNewSection } = useTodoData();

  return (
    <div className={styles.Todo}>
      <div className="container">
        <h1>Draggable Todo</h1>
        <div className={styles.TodoContainer}>
          {todoData.map((section) => (
            <CardList
              key={section.title}
              section={section}
              moveCardToNewSection={moveCardToNewSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
