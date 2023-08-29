import { TEASER_VIDEO } from "#utils/constants";
import React from "react";
import styles from "./videoCarousel.module.scss";

const VideoCarousel = () => {
  const videoSrc = `https://www.youtube.com/embed/${TEASER_VIDEO.id}?si=xqge3c4ul8wVyIWv?start=${TEASER_VIDEO.start}&end=${TEASER_VIDEO.end}&autoplay=1&loop=1&playlist=${TEASER_VIDEO.id}&controls=0&modestbranding=1`;

  return (
    <div className={styles.videoCarouselWrapper}>
      <div className={styles.videoCarousel}>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/btd8Tbcs5GU?si=NmLyegOQxlKeDuCG?start=12&end=55'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCarousel;
