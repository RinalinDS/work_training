import { FC } from "react";
import styles from "./CityItem.module.css";
import { CityType } from "./CityList";
import { Link } from "react-router-dom";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export const CityItem: FC<{ city: CityType }> = ({ city }) => {
  const { cityName, emoji, date, id } = city;
  return (
    <li>
      <Link className={styles.cityItem} to={`/app/cities/${id}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <span className={styles.date}>({formatDate(date)})</span>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
