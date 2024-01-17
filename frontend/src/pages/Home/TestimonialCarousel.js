import useLocaleContext from "#context/localeContext";
import { TESTIMONIALS } from "#utils/constants";
import { camelCaseToTitleCase } from "#utils/utils";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonialCarousel.module.scss";
const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 14000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { translate } = useLocaleContext();
  const text = translate.components.testimonialCarousel;
  return (
    <div className={styles.testimonialCarouselWrapper}>
      <div className={styles.title}>
        <span>{camelCaseToTitleCase(text.title)}</span>
      </div>
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div className={styles.textAndImageContainerWrapper} key={index}>
            <div className={styles.textAndImageContainer}>
              <div className={styles.leftColumn}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className={styles.customIcon}
                  />
                </div>
                <div className={styles.text}>
                  <p>{text[testimonial.person]}</p>
                </div>
                <div className={styles.testimonialPerson}>
                  <p>{camelCaseToTitleCase(testimonial.person)}</p>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={`${process.env.PUBLIC_URL}/assets/testimonials/${testimonial.image}`}
                    alt='Testimonial'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
