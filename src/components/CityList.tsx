import styles from "./CityList.module.css";

import { FC } from "react";
import Spinner from "./Spinner";
import { CityItem } from "./CityItem";
import Message from "./Message";

export type CityType = {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
};

type CitylistProp = {
  cities: CityType[];
  isLoading: boolean;
};

export const CityList: FC<CitylistProp> = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add city" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
};
