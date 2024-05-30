import { useConcerts } from "#hooks/useConcerts";
import { useTranslate } from "#hooks/useTranslate";
import { checkHttp, titleCase } from "#utils/utils";
import { Link } from "react-router-dom";
import styles from "./concertsList.module.scss";

export const ConcertsList = () => {
  const { concerts } = useConcerts();
  const translate = useTranslate();
  const text = translate.components.concertsList;

  return (
    <div className={styles.list} aria-label='concerts list'>
      {concerts &&
        concerts.map((concert, index) => (
          <div key={index} className={styles.listItem}>
            <span className={styles.data} aria-label='concert date'>
              {new Date(concert.concertDate).toLocaleDateString()}
            </span>
            <span className={styles.data} aria-label='concert venue'>
              {titleCase(concert.venue)}
            </span>
            <span className={styles.data} aria-label='concert city'>
              {concert.city}, {concert.country}
            </span>
            <Link to={checkHttp(concert.venueLink)} className={styles.link}>
              <button
                className={styles.button}
                aria-label='navigate to venue page'
              >
                {text.venueLink.toUpperCase()}
              </button>
            </Link>
            <Link to={checkHttp(concert.ticketsLink)} className={styles.link}>
              <button
                className={styles.button}
                aria-label='navigate to tickets page'
              >
                {text.ticketsLink.toUpperCase()}
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};
