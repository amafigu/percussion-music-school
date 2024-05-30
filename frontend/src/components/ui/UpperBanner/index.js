import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import styles from "./upperBanner.module.scss";

export const UpperBanner = ({ backgroundUrl, title, text }) => {
  return (
    <section className={styles.wrapper} aria-label={title}>
      <div className={styles.container}>
        <div
          className={styles.backgroundImage}
          aria-label='background'
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundUrl})`,
          }}
        ></div>
        <div className={styles.content}>
          <div className={styles.title}>{camelCaseToTitleCase(title)}</div>
          <div className={styles.text}>{camelCaseToTitleCase(text)}</div>
        </div>
      </div>
    </section>
  );
};
