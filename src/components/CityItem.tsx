import { FC } from "react";
import styles from "./CityItem.module.css";
import { CityType } from "./CityList";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export const CityItem: FC<{ city: CityType }> = ({ city }) => {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <span className={styles.date}>({formatDate(date)})</span>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};
