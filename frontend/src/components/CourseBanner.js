import React from "react";
import styles from "./courseBanner.module.scss";

const CourseBanner = ({ imageUrl, name, subtitle, text, invert }) => {
  return (
    <section className={styles.courseBannerSection}>
      <div className={styles.presentation}>
        <div
          className={styles.imageContaier}
          style={invert ? { order: 2 } : { order: 1 }}
        >
          <img alt='banner' className={styles.image} src={imageUrl} />
        </div>
        <div
          className={styles.textAndIconsContainer}
          style={invert ? { order: 1 } : { order: 2 }}
        >
          <div className={styles.textAndIcons}>
            <div className={styles.name}>{name}</div>
            <div className={styles.position}>{subtitle}</div>
            <p>{text}</p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
