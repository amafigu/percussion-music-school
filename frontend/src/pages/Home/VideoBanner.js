import React from "react";
import { TEASER_VIDEO } from "../../utils/constants";
import styles from "./videoBanner.module.scss";

const VideoBanner = () => {
  return (
    <div className={styles.videoBannerWrapper}>
      <div className={styles.videoBanner}>
        <iframe
          className={styles.iframeVideo}
          src={TEASER_VIDEO}
          title='teaser video'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <div className={styles.borderDiv}></div>
      </div>
    </div>
  );
};

export default VideoBanner;
