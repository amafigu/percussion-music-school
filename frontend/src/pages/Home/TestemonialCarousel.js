import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./testemonialCarousel.module.scss";

const TestemonialCarousel = () => {
  return (
    <div className={styles.testemonialCarouselWrapper}>
      <div className={styles.testemonialCarousel}>
        <div className={styles.title}>
          <span>Testemonials</span>
        </div>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <div className={styles.textAndImageContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.icon}></div>
            <div className={styles.text}>
              <p>
                The lessons at My Drum School are well structured for
                progression in drum learning. There is also an emphasis on
                applying what I have learnt into songs, and it keeps the
                learning practical and enjoyable! Thanks goes to my educator,
                Jiaxing, who is always very encouraging and motivates me to keep
                improving.
              </p>
            </div>
            <div className={styles.testemonialPerson}>Fulanit@</div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}/assets/testemonial1.png`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemonialCarousel;
