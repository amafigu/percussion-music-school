import { philosophyBackground } from "#constants/backgroundImages";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./philosophyBanner.module.scss";

export const PhilosophyBanner = React.forwardRef(({ props }, ref) => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <section
      ref={ref}
      className={`${styles.philosophyBanner} ${styles.philosophySection}`}
      aria-label='philosophy section'
    >
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${philosophyBackground})`,
        }}
      ></div>
      <div className={styles.text}>
        <div className={styles.title}>
          <span>{text.ourPhilosophyTitle}</span>
        </div>
        <div className={styles.subtitle}>
          <span>{text.ourPhilosophySubtitle}</span>
        </div>
        <div className={styles.content}>
          <p>{text.ourPhilosophyFirst}</p>
          <p>{text.ourPhilosophySecond}</p>
        </div>
      </div>
    </section>
  );
});
