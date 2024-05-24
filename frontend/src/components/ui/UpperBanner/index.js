import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import styles from "./upperBanner.module.scss";

export const UpperBanner = ({ backgroundUrl, title, text }) => {
  return (
    <section className={styles.coursesPageWrapper} aria-label={title}>
      <div className={styles.coursesPage}>
        <div className={styles.upperSection}>
          <div
            className={styles.backgroundImage}
            aria-label='background'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundUrl})`,
            }}
          ></div>
          <div className={styles.text}>
            <div className={styles.title}>{camelCaseToTitleCase(title)}</div>
            <div className={styles.content}>{camelCaseToTitleCase(text)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
