// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { MouseEvent, useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Form.module.css";

export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char, index) => 127397 + char.charCodeAt(index));
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toISOString()}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            // потому что внутри формы клик на баттон тригерит сабмит и страница перезагружается, а мне этого не надою
            e.preventDefault();

            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
