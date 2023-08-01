import { useState } from "react";
import { TodoSection } from "../../types/todo.types";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

type Props = {
  section: TodoSection;
};

function CardList({ section }: Props) {
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = () => {
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  return (
    <div
      className={`${styles.CardList} ${
        isDraggedOver ? styles.draggedOver : ""
      }`}
    >
      <h2>{section.title}</h2>
      <div
        className={styles.CardsContainer}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {section.cards.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
