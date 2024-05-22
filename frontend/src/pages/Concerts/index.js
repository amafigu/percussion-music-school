import { useTranslate } from "#hooks/useTranslate.js";
import { ConcertsList } from "./ConcertsList";
import styles from "./concerts.module.scss";

export const Concerts = () => {
  const translate = useTranslate();
  const text = translate.pages.concerts;

  return (
    <main className={styles.concerts}>
      <h2 className={styles.title} aria-label='page title'>
        {text.title}
      </h2>
      <section className={styles.content}>
        <ConcertsList />
      </section>
    </main>
  );
};
