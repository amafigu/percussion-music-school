import { useTranslate } from "#hooks/useTranslate";
import styles from "./educationBanner.module.scss";

export const EducationBanner = () => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <div className={styles.logoAndTextContainer}>
      <div className={styles.logoAboveText}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            alt='logo'
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          ></img>
        </div>
        <div className={styles.text}>{text.inspirationAndEducation.title}</div>
      </div>
      <div className={styles.paragraphsContainer}>
        <div className={styles.paragraphs}>
          <p>{text.inspirationAndEducation.firstParagraph}</p>
          <br />
          <p>{text.inspirationAndEducation.secondParagraph}</p>
        </div>
      </div>
    </div>
  );
};
