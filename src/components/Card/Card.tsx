import React, { useState } from "react";
import { CardData } from "../../types/todo.types";
import styles from "./Card.module.css";

type Props = {
  data: CardData;
  sectionTitle: string;
};

function Card({ data, sectionTitle }: Props) {
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
      {data.content}
    </div>
  );
}

export default Card;
