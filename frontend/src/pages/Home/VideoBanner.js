import useLocaleContext from "#context/localeContext";
import React from "react";
import styles from "./videoBanner.module.scss";
const VideoBanner = () => {
  const { translate } = useLocaleContext();
  const t = translate.components.videoBanner;
  return (
    <div className={styles.videoBanner}>
      <div className={styles.videoWrapper}>
        <div className={styles.textBanner}>
          <p className={styles.title}>{t.titleFirst}</p>
          <p className={styles.title}>{t.titleSecond}</p>
          <div className={styles.subtitles}>
            <p className={styles.subtitle}>{t.subtitleFirst}</p>
            <p className={styles.subtitle}>{t.subtitleSecond}</p>
            <p className={styles.subtitle}>{t.subtitleThird}</p>
          </div>
        </div>

        <video className={styles.video} autoPlay loop muted>
          <source
            src={`${process.env.PUBLIC_URL}/assets/banner.mp4`}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default VideoBanner;
