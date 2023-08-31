import { TESTEMONIALS } from "#utils/constants";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useCallback, useEffect, useState } from "react";
import styles from "./testemonialCarousel.module.scss";

const TestemonialCarousel = () => {
  const [currentTestemonialIndex, setCurrentTestemonialIndex] = useState(0);

  const nextTestemonial = useCallback(() => {
    const nextIndex = currentTestemonialIndex + 1;
    setCurrentTestemonialIndex(
      nextIndex >= TESTEMONIALS.length ? 0 : nextIndex,
    );
  }, [currentTestemonialIndex]);

  /* eslint-disable no-unused-vars */
  const previousTestemonial = useCallback(() => {
    const nextIndex = currentTestemonialIndex - 1;
    setCurrentTestemonialIndex(
      nextIndex < 0 ? TESTEMONIALS.length - 1 : nextIndex,
    );
  }, [currentTestemonialIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestemonial();
    }, 12000);

    return () => clearInterval(timer);
  }, [nextTestemonial]);

  const currentTestimonial = TESTEMONIALS[currentTestemonialIndex];
  return (
    <div className={styles.testemonialCarouselWrapper}>
      <div className={styles.testemonialCarousel}>
        <div className={styles.title}>
          <span>Testemonials</span>
        </div>

        <div className={styles.textAndImageContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className={styles.customIcon}
              />
            </div>
            <div className={styles.text}>
              <p>{currentTestimonial.text}</p>
            </div>
            <div className={styles.testemonialPerson}>
              <p>{currentTestimonial.person}</p>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}/assets/${currentTestimonial.image}`}
                alt='Testemonial'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemonialCarousel;
