import { useConcerts } from "#hooks/useConcerts.js";
import { useTranslate } from "#hooks/useTranslate.js";
import { checkHttp, titleCase } from "#utils/utils.js";
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
            <span className={styles.date} aria-label='concert date'>
              {new Date(concert.concertDate).toLocaleDateString()}
            </span>
            <span className={styles.venue} aria-label='concert venue'>
              {titleCase(concert.venue)}
            </span>
            <span className={styles.city} aria-label='concert city'>
              {concert.city}, {concert.country}
            </span>
            <button
              className={styles.button}
              aria-label='navigate to venue page'
            >
              <a
                href={checkHttp(concert.venueLink)}
                target='_blank'
                rel='noopener noreferrer'
              >
                {text.venueLink.toUpperCase()}
              </a>
            </button>
            <button
              className={styles.button}
              aria-label='navigate to tickets page'
            >
              <a
                href={checkHttp(concert.ticketsLink)}
                target='_blank'
                rel='noopener noreferrer'
              >
                {text.ticketsLink.toUpperCase()}
              </a>
            </button>
          </div>
        ))}
    </div>
  );
};
