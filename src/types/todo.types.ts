export type TodoData = TodoSection[];

export type TodoSection = {
  title: string;
  cards: CardData[];
};

export type CardData = {
  content: string;
  date: string;
};
