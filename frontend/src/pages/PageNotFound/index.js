import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

export const PageNotFound = () => {
  scrollToTop();
  const translate = useTranslate();
  const text = translate.pages.pageNotFound;
  return (
    <main className={styles.wrapper} aria-label='Page not found'>
      <div className={styles.container}>
        <div className={styles.number}>404!</div>
        <div className={styles.title}>{text.title}</div>
        <div className={styles.description}>
          <p>{text.subtitleFirst}</p>
          <p>{text.subtitleSecond}</p>
        </div>
        <Link className={styles.link} to='/'>
          <div className={styles.textContainer}>
            <span className={styles.link}>{text.backToHome}</span>
          </div>
        </Link>
      </div>
    </main>
  );
};
