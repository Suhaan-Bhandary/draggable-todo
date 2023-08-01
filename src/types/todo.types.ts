export type TodoData = TodoSection[];

export type TodoSection = {
  title: string;
  cards: CardData[];
};

export type CardData = {
  id: string;
  content: string;
  date: string;
};
