import { philosophySectionBackgroundImage } from "#constants/backgroundImages";
import { useTranslate } from "#hooks/useTranslate";
import styles from "./philosophyBanner.module.scss";

export const PhilosophyBanner = () => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <section
      className={styles.philosophyBanner}
      aria-label='philosophy section'
    >
      <div
        className={styles.background}
        style={philosophySectionBackgroundImage}
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
};
