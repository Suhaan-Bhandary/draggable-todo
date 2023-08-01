import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import { CardData, TodoData } from "../../types/todo.types";
import styles from "./Todo.module.css";

function Todo() {
  const [data, setData] = useState<TodoData>([
    {
      title: "Todo",
      cards: [
        {
          id: "1",
          content: "1",
          date: "01/01/2022",
        },
        {
          id: "2",
          content: "2",
          date: "01/01/2022",
        },
        {
          id: "3",
          content: "3",
          date: "01/01/2022",
        },
      ],
    },
    {
      title: "Doing",
      cards: [],
    },
    {
      title: "Done",
      cards: [],
    },
  ]);

  const moveCardToNewSection = (cardId: string, from: string, to: string) => {
    // If from and to are same then ignore
    if (from == to) return;

    let newData = structuredClone(data);
    let card: CardData | null = null;

    // Remove card and store it in variable
    newData = newData.map((section) => {
      if (section.title == from) {
        card = section.cards.find((card) => card.id == cardId)!;
        section.cards = section.cards.filter((card) => card.id != cardId);
      }
      return section;
    });

    // push the card to the new section
    newData = newData.map((section) => {
      if (section.title == to && card) section.cards.push(card);
      return section;
    });

    setData(newData);
  };

  return (
    <div className={styles.Todo}>
      <div className="container">
        <h1>Draggable Todo</h1>
        <div className={styles.TodoContainer}>
          {data.map((section) => (
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
