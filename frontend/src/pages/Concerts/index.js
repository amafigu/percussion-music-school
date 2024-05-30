import { useTranslate } from "#hooks/useTranslate";
import { ConcertsList } from "./ConcertsList";
import styles from "./concerts.module.scss";

export const Concerts = () => {
  const translate = useTranslate();
  const text = translate.pages.concerts;

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>{text.title}</h2>
      <section className={styles.content}>
        <ConcertsList />
      </section>
    </main>
  );
};
