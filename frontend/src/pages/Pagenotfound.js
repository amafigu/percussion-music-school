import { useEffectScrollTop } from "#utils/utils";
import { Link } from "react-router-dom";
import styles from "./pagenotfound.module.scss";

const PageNotfound = () => {
  useEffectScrollTop();
  return (
    <div className={styles.pageNotFoundWrapper}>
      <div className={styles.pageNotFound}>
        <div className={styles.httpErrorNumber}>404!</div>
        <div className={styles.httpErrorText}>page not found</div>
        <div className={styles.text}>
          <p>
            The page you are looking for does not exist. It may have been moved,
          </p>
          <p>
            or removed altogether. Perhaps you can return back to the site's
            homepage and see if you can find what you are looking for.
          </p>
        </div>
        <Link className={styles.button} to='/'>
          <div className={styles.link}>
            <span className={styles.buttonText}>Back to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageNotfound;
