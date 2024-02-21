import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import CoursesCardTeaser from "./CoursesCardTeaser";
import TestimonialCarousel from "./TestimonialCarousel";
import VideoBanner from "./VideoBanner";
import styles from "./home.module.scss";

const Home = () => {
  const translate = useTranslate();
  const text = translate.pages.home;

  scrollToTop();
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <VideoBanner />
        <section className={styles.cardsSection}>
          <div className={styles.presentation}>
            <p className={styles.title}>Tierra y Aire </p>
            <p className={styles.subtitle}>{text.title}</p>
            <p className={styles.missionText}>{text.subtitle}</p>
          </div>
          <div className={styles.cardTeaserContainer}>
            <CoursesCardTeaser />
          </div>
        </section>
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Home;
