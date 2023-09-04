import { useEffectScrollTop } from "#utils/utils";
import styles from "./about.module.scss";

const About = () => {
  useEffectScrollTop();
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner_about.png)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    opacity: "0.3",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "660px",
    zIndex: 0,
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.aboutPage}>
        <div className={styles.upperBanner}>
          <div style={backgroundImage}></div>
          <div className={styles.upperBannerText}>
            <div className={styles.title}>About Tierra y Aire</div>
            <div className={styles.content}>
              Established since 2018, the Tierra y Aire ethos has always been
              one of integration and sharing. Today, we have become the people’s
              choice for drum education as the largest specialized drum school
              in Rosario.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
