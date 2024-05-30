import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import styles from "./courseBanner.module.scss";

export const CourseBanner = ({ imageUrl, name, text, invert }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.imageContaier}
          style={invert ? { order: 2 } : { order: 1 }}
        >
          <img
            alt='course banner'
            className={styles.image}
            src={`${process.env.PUBLIC_URL}${imageUrl}`}
          />
        </div>
        <div
          className={styles.content}
          style={invert ? { order: 1 } : { order: 2 }}
        >
          <div className={styles.text}>
            <span className={styles.name}>{camelCaseToTitleCase(name)}</span>
            <p>{text}</p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};
