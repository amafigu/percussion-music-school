import { useEffectScrollTop } from "#utils/utils";
import styles from "./about.module.scss";

const About = () => {
  useEffectScrollTop();
  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.aboutPage}>about</div>
    </div>
  );
};

export default About;
