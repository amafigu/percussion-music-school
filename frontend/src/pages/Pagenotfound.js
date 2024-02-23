import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import { Link } from "react-router-dom";
import styles from "./pagenotfound.module.scss";

const PageNotfound = () => {
  scrollToTop();
  const translate = useTranslate();
  const text = translate.pages.pageNotFound;
  return (
    <div className={styles.pageNotFoundWrapper}>
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
    </div>
  );
};

export default PageNotfound;
