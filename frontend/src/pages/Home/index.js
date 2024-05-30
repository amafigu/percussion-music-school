import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import { CourseCards } from "./CourseCards";
import { HomeBanner } from "./HomeBanner";
import { TestimonialCarousel } from "./TestimonialCarousel";
import styles from "./home.module.scss";

export const Home = () => {
  const translate = useTranslate();
  const text = translate.pages.home;

  scrollToTop();
  return (
    <main className={styles.wrapper} aria-label='Home page'>
      <div className={styles.container}>
        <HomeBanner />
        <section className={styles.cardsSection}>
          <div className={styles.presentation}>
            <p className={styles.title}>Tierra y Aire</p>
            <p className={styles.subtitle}>{text.title}</p>
            <p className={styles.missionText}>{text.subtitle}</p>
          </div>
          <div className={styles.cardsContainer}>
            <CourseCards />
          </div>
        </section>
        <TestimonialCarousel />
      </div>
    </main>
  );
};
