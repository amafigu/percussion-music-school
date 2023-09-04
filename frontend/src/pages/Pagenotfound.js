import styles from "./pagenotfound.module.scss";

const PageNotfound = () => {
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
      </div>
    </div>
  );
};

export default PageNotfound;
