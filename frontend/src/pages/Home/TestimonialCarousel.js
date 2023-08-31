import { TESTIMONIALS } from "#utils/constants";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useCallback, useEffect, useState } from "react";
import styles from "./testimonialCarousel.module.scss";

const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const nextTestimonial = useCallback(() => {
    const nextIndex = currentTestimonialIndex + 1;
    setCurrentTestimonialIndex(
      nextIndex >= TESTIMONIALS.length ? 0 : nextIndex,
    );
  }, [currentTestimonialIndex]);

  /* eslint-disable no-unused-vars */
  const previousTestemonial = useCallback(() => {
    const nextIndex = currentTestimonialIndex - 1;
    setCurrentTestimonialIndex(
      nextIndex < 0 ? TESTIMONIALS.length - 1 : nextIndex,
    );
  }, [currentTestimonialIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 12000);

    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const touchStart = (e) => {
    setTouchStartX(e.clientX);
    console.log("start", touchStartX);
  };

  const touchEnd = (e) => {
    const diffX = touchStartX - e.screenX;

    console.log("end");

    if (diffX > 0) {
      console.log("left ", diffX);
      // Swiped left
      previousTestemonial();
    } else if (diffX < 0) {
      // Swiped right
      console.log("right ", diffX);
      nextTestimonial();
    }
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];
  return (
    <div className={styles.testimonialCarouselWrapper}>
      <div
        className={styles.testimonialCarousel}
        onMouseDown={touchStart}
        onMouseUp={touchEnd}
      >
        <div className={styles.title}>
          <span>Testemonials</span>
        </div>

        <div
          className={`${styles.textAndImageContainer} ${styles.transitionEffect}`}
        >
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
        <div className={styles.itemsSelectorContainer}>
          <button
            className={styles.selector}
            onClick={() => setCurrentTestimonialIndex(0)}
          ></button>
          <button
            className={styles.selector}
            onClick={() => setCurrentTestimonialIndex(1)}
          ></button>
          <button
            className={styles.selector}
            onClick={() => setCurrentTestimonialIndex(2)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
