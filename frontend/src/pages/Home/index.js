import styles from "./home.module.scss";
import VideoBanner from "./VideoBanner";
const Home = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <div>
          <VideoBanner />
        </div>
      </div>
    </div>
  );
};

export default Home;
