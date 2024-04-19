import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import { Link } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

export const PageNotFound = () => {
  scrollToTop();
  const translate = useTranslate();
  const text = translate.pages.pageNotFound;
  return (
    <main className={styles.pageNotFoundWrapper} aria-label='Page not found'>
      <div className={styles.pageNotFound}>
        <div className={styles.httpErrorNumber}>404!</div>
        <div className={styles.httpErrorText}>{text.title}</div>
        <div className={styles.text}>
          <p>{text.subtitleFirst}</p>
          <p>{text.subtitleSecond}</p>
        </div>
        <Link className={styles.button} to='/'>
          <div className={styles.link}>
            <span className={styles.buttonText}>{text.backToHome}</span>
          </div>
        </Link>
      </div>
    </main>
  );
};
