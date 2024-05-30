import { logo } from "#constants/images";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./educationBanner.module.scss";

export const EducationBanner = React.forwardRef((_, ref) => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <section ref={ref} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoAndTitle}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              alt='logo'
              src={`${process.env.PUBLIC_URL}${logo}`}
            ></img>
          </div>
          <div className={styles.title}>
            {text.inspirationAndEducation.title}
          </div>
        </div>
        <div className={styles.paragraphsContainer}>
          <div className={styles.paragraphs}>
            <p>{text.inspirationAndEducation.firstParagraph}</p>
            <br />
            <p>{text.inspirationAndEducation.secondParagraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
});
