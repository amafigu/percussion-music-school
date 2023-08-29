import CoursesCardTeaser from "./CoursesCardTeaser";
import VideoBanner from "./VideoBanner";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <VideoBanner />

        <CoursesCardTeaser />
      </div>
    </div>
  );
};

export default Home;
