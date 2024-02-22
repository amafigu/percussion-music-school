import { useTranslate } from "#hooks/useTranslate";
import React, { useState } from "react";
import styles from "./videoBanner.module.scss";

const VideoBanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoLoad = () => setVideoLoaded(true);
  const translate = useTranslate();
  const t = translate.components.videoBanner;
  return (
    <div className={styles.videoBanner}>
      <div
        className={`${
          videoLoaded ? styles.videoWrapper : styles.skeletonPlaceholder
        }`}
      >
        {videoLoaded ? (
          <div className={styles.textBanner}>
            <p className={styles.title}>{t.titleFirst}</p>
            <p className={styles.title}>{t.titleSecond}</p>
            <div className={styles.subtitles}>
              <p className={styles.subtitle}>{t.subtitleFirst}</p>
              <p className={styles.subtitle}>{t.subtitleSecond}</p>
              <p className={styles.subtitle}>{t.subtitleThird}</p>
            </div>
          </div>
        ) : (
          ""
        )}

        <video
          className={styles.video}
          autoPlay
          loop
          muted
          onCanPlayThrough={handleVideoLoad}
        >
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
