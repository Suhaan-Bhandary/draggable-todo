import React, { useState } from "react";
import { CardData } from "../../types/todo.types";
import styles from "./Card.module.css";

type Props = {
  data: CardData;
  sectionTitle: string;
  removeCardFromSection: (cardId: string, sectionTitle: string) => void;
};

function Card({ data, sectionTitle, removeCardFromSection }: Props) {
  const [isDragged, setIsDragged] = useState(false);

  const handleCardDrag = (event: React.DragEvent) => {
    event.dataTransfer.setData("section", sectionTitle);
    event.dataTransfer.setData("cardId", data.id);
    setIsDragged(true);
  };

  const handleCardDragLeave = () => {
    setIsDragged(false);
  };

  return (
    <div
      className={`${styles.Card} ${isDragged ? styles.cardDragging : ""}`}
      draggable
      onDragStart={handleCardDrag}
      onDragEnd={handleCardDragLeave}
    >
      <p>{data.content}</p>
      <button
        className={styles.deleteButton}
        onClick={() => removeCardFromSection(data.id, sectionTitle)}
      >
        X
      </button>
    </div>
  );
}

export default Card;
