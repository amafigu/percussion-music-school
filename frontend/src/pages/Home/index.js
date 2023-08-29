import CoursesCardTeaser from "./CoursesCardTeaser";
import VideoBanner from "./VideoBanner";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <VideoBanner />
        <div className={styles.presentation}>
          <p>Tierra y Aire </p>
          <p> Rosario's largest specialized drum school since 2018</p>
          <p>
            Our mission is to inspire and educate drummers by using the latest
            technology and resources in providing a distinctive contemporary
            drum education.
          </p>
        </div>

        <CoursesCardTeaser />
      </div>
    </div>
  );
};

export default Home;
