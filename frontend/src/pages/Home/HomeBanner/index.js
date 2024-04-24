import { useTranslate } from "#hooks/useTranslate";
import React, { useState } from "react";
import styles from "./homeBanner.module.scss";

export const HomeBanner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const translate = useTranslate();
  const t = translate.components.homeBanner;

  return (
    <section className={styles.homeBanner} aria-label='welcome section'>
      <div className={styles.container}>
        {imageLoaded && (
          <div
            className={styles.textBanner}
            style={{ visibility: imageLoaded ? "visible" : "hidden" }}
          >
            <p className={styles.title}>{t.titleFirst}</p>
            <p className={styles.title}>{t.titleSecond}</p>
            <div className={styles.subtitles}>
              <p className={styles.subtitle}>{t.subtitleFirst}</p>
              <p className={styles.subtitle}>{t.subtitleSecond}</p>
              <p className={styles.subtitle}>{t.subtitleThird}</p>
            </div>
          </div>
        )}

        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/assets/about_page_school.png`}
          alt='Group'
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </section>
  );
};
