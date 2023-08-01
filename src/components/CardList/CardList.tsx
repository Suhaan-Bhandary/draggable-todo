import { useState } from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

function CardList() {
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
      <h2>Todo</h2>
      <div
        className={styles.CardsContainer}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CardList;
