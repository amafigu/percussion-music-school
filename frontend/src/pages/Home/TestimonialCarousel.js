import { TESTIMONIALS } from "#utils/constants";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useCallback, useEffect, useState } from "react";
import styles from "./testimonialCarousel.module.scss";

const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);

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

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        const offsetX = e.clientX - touchStartX;
        setTranslateX(offsetX);
      }
    },
    [dragging, touchStartX],
  );

  const touchStart = (e) => {
    setTouchStartX(e.clientX);
    setDragging(true);

    console.log("start", touchStartX);
  };

  const touchEnd = (e) => {
    const THRESHOLD_LEFT = 400;
    const THRESHOLD_RIGHT = -400;
    setDragging(false);
    const diffX = touchStartX - e.screenX;
    setTranslateX(0);

    console.log("end", diffX);
    if (Math.abs(diffX) > THRESHOLD_LEFT || Math.abs(diffX) < THRESHOLD_RIGHT) {
      if (diffX > 0) {
        console.log("left ", diffX);
        previousTestemonial();
        setTranslateX(0);
        setDragging(false);
      } else if (diffX < 0) {
        console.log("right ", diffX);
        nextTestimonial();
        setTranslateX(0);
        setDragging(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const dynamicStyles = {
    transform: `translateX(${translateX}px)`,
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];
  return (
    <div className={styles.testimonialCarouselWrapper} onMouseLeave={touchEnd}>
      <div
        className={styles.testimonialCarousel}
        onMouseDown={touchStart}
        onMouseUp={touchEnd}
      >
        <div className={styles.title}>
          <span>Testimonials</span>
        </div>

        <div
          className={`${styles.textAndImageContainer} ${styles.transitionEffect}`}
          style={dragging ? dynamicStyles : {}}
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
