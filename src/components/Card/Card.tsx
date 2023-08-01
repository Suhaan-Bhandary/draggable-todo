import { useState } from "react";
import { CardData } from "../../types/todo.types";
import styles from "./Card.module.css";

type Props = {
  data: CardData;
};

function Card({ data }: Props) {
  const [isDragged, setIsDragged] = useState(false);

  const handleCardDrag = () => {
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
