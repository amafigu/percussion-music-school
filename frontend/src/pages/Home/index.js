import { useEffectScrollTop } from "#utils/utils";
import CoursesCardTeaser from "./CoursesCardTeaser";
import TestimonialCarousel from "./TestimonialCarousel";
import VideoBanner from "./VideoBanner";
import styles from "./home.module.scss";

const Home = () => {
  useEffectScrollTop();
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <VideoBanner />
        <section className={styles.cardsSection}>
          <div className={styles.presentation}>
            <p className={styles.title}>Tierra y Aire </p>
            <p className={styles.subtitle}>
              Rosario's largest specialized drum school since 2018
            </p>
            <p className={styles.missionText}>
              Our mission is to inspire and educate drummers by using the latest
              technology and resources in providing a distinctive contemporary
              drum education.
            </p>
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
