import { educationBanner } from "#constants/backgroundImages";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./inspirationBanner.module.scss";

export const InspirationBanner = React.forwardRef((_, ref) => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <section ref={ref} className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={`${process.env.PUBLIC_URL}${educationBanner}`}
          alt='inspiration section'
          className={styles.image}
        />
        <div>
          <div className={styles.textContainer}>
            <span className={styles.text}>{text.firstImageCard}</span>
          </div>
        </div>
      </div>
    </section>
  );
});
