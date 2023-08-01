import Card from "../Card/Card";
import styles from "./CardList.module.css";

function CardList() {
  return (
    <div className={styles.CardList}>
      <h2>Todo</h2>
      <div className={styles.CardsContainer}>
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
