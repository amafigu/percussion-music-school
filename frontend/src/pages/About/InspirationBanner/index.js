import { educationBanner } from "#constants/backgroundImages";
import { STYLES } from "#constants/styles";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./inspirationBanner.module.scss";

export const InspirationBanner = React.forwardRef((props, ref) => {
  const EDUCATION = STYLES.PAGES.ABOUT.SECTIONS.EDUCATION;
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <section ref={ref} className={styles[EDUCATION.CONTAINER]}>
      <div className={styles[EDUCATION.BANNER.PARENT]}>
        <img
          src={`${process.env.PUBLIC_URL}${educationBanner}`}
          alt='inspiration section'
          className={styles[EDUCATION.BANNER.IMAGE]}
        />
        <div>
          <div className={styles[EDUCATION.BANNER.TEXT_LAYER]}>
            <span className={styles[EDUCATION.BANNER.TEXT]}>
              {text.firstImageCard}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});
