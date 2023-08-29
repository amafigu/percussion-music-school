import styles from "./home.module.scss";
import VideoCarousel from "./VideoCarousel";
const Home = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        Home
        <div>
          <VideoCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
