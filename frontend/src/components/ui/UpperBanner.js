import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import styles from "./upperBanner.module.scss";

const UpperBanner = ({ backgroundUrl, title, text }) => {
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <section className={styles.upperSection}>
          <div className={styles.backgroundImage} style={backgroundUrl}></div>

          <div className={styles.text}>
            <div className={styles.title}>{camelCaseToTitleCase(title)}</div>
            <div className={styles.content}>{camelCaseToTitleCase(text)}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UpperBanner;
