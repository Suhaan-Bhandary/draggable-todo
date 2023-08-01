import CardList from "../../components/CardList/CardList";
import TodoCardInput from "../../components/TodoCardInput/TodoCardInput";
import useTodoData from "../../hooks/useTodoData";
import styles from "./Todo.module.css";

function Todo() {
  const {
    todoData,
    addCardToTodoSection,
    removeCardFromSection,
    moveCardToNewSection,
  } = useTodoData();

  return (
    <div className={styles.Todo}>
      <div className="container">
        <h1 className={styles.title}>Draggable Todo</h1>
        <TodoCardInput addCardToTodoSection={addCardToTodoSection} />

        <div className={styles.TodoContainer}>
          {todoData.map((section) => (
            <CardList
              key={section.title}
              section={section}
              moveCardToNewSection={moveCardToNewSection}
              removeCardFromSection={removeCardFromSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
