import { useState } from "react";
import { TodoSection } from "../../types/todo.types";
import Card from "../Card/Card";
import styles from "./CardList.module.css";

type Props = {
  section: TodoSection;
  moveCardToNewSection: (cardId: string, from: string, to: string) => void;
  removeCardFromSection: (cardId: string, sectionTitle: string) => void;
};

function CardList({
  section,
  moveCardToNewSection,
  removeCardFromSection,
}: Props) {
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  const handleCardDrop = (event: React.DragEvent) => {
    setIsDraggedOver(false);

    const newSectionTitle = section.title;
    const oldSectionTitle = event.dataTransfer.getData("section");
    const cardId = event.dataTransfer.getData("cardId");
    moveCardToNewSection(cardId, oldSectionTitle, newSectionTitle);
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
        onDrop={handleCardDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {section.cards.map((data) => (
          <Card
            key={data.id}
            data={data}
            sectionTitle={section.title}
            removeCardFromSection={removeCardFromSection}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
