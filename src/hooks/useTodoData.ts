import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";
import { CardData, TodoData } from "../types/todo.types";
import getFormattedDateFromTime from "../utils/getFormattedDateFromTime";

const initialValue = [
  {
    title: "Todo",
    cards: [
      {
        id: "1",
        content: "Todo 1",
        date: "01/08/2023",
      },
      {
        id: "2",
        content: "Todo 2",
        date: "01/08/2023",
      },
      {
        id: "3",
        content: "Todo 3",
        date: "01/08/2023",
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
];

const useTodoData = () => {
  const [todoData, setTodoData] = useLocalStorage<TodoData>(
    "todo-data",
    initialValue
  );

  const moveCardToNewSection = (cardId: string, from: string, to: string) => {
    // If from and to are same then ignore
    if (from == to) return;

    let newData = structuredClone(todoData);
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

    setTodoData(newData);
  };

  const removeCardFromSection = (cardId: string, sectionTitle: string) => {
    let newData = structuredClone(todoData);

    // Remove card and store it in variable
    newData = newData.map((section) => {
      if (section.title == sectionTitle) {
        section.cards = section.cards.filter((card) => card.id != cardId);
      }
      return section;
    });

    setTodoData(newData);
  };

  const addCardToTodoSection = (content: string) => {
    let newData = structuredClone(todoData);

    // Remove card and store it in variable
    newData = newData.map((section) => {
      if (section.title == "Todo") {
        section.cards.push({
          id: uuidv4(),
          content: content,
          date: getFormattedDateFromTime(new Date()),
        });
      }
      return section;
    });

    setTodoData(newData);
  };

  return {
    todoData,
    addCardToTodoSection,
    removeCardFromSection,
    moveCardToNewSection,
  };
};

export default useTodoData;
