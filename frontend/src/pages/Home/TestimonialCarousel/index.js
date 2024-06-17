import { TESTIMONIALS } from "#constants/testimonials";
import { useTranslate } from "#hooks/useTranslate";
import { camelCaseToTitleCase } from "#utils/utils";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import styles from "./testimonialCarousel.module.scss";

export const TestimonialCarousel = () => {
  const translate = useTranslate();
  const text = translate.components.testimonialCarousel;
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 14000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.wrapper} aria-label='Testemonia section'>
      <div className={styles.title}></div>
      <Slider {...sliderSettings}>
        {TESTIMONIALS.map((testimonial, index) => (
          <article className={styles.container} key={index}>
            <div className={styles.testimonial}>
              <div className={styles.text}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className={styles.personData}>
                  <p>{text[testimonial.name]}</p>
                </div>
                <div className={styles.name}>
                  <p>{camelCaseToTitleCase(testimonial.name)}</p>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={`${process.env.PUBLIC_URL}${testimonial.image}`}
                    alt='Testimonial'
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};
