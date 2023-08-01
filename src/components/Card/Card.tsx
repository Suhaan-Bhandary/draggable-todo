import { useState } from "react";
import styles from "./Card.module.css";

function Card() {
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
      onDrag={handleCardDrag}
      onDragEnd={handleCardDragLeave}
    >
      Card
    </div>
  );
}

export default Card;
