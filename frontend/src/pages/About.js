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
        <div className={styles.linksRow}>
          <ul>
            <li className={styles.listItem}>
              <a href='#school'>our school</a>
            </li>
            <li className={styles.listItem}>
              <a href='#accolades'>our accolades</a>
            </li>
            <li className={styles.listItem}>
              <a href='#philosophy'>our philosophy</a>
            </li>
            <li className={styles.listItem}>
              <a href='#founder'>our founder</a>
            </li>
            <li className={styles.listItem}>
              <a href='#story'>our story</a>
            </li>
          </ul>
        </div>
        <section className={styles.educationSection} id='school'>
          <div className={styles.imageContainer}>
            <img
              alt='inspiration'
              className={styles.imageEducation}
              src={`${process.env.PUBLIC_URL}/assets/about_page_school.png`}
            ></img>
            <div className={styles.textLayer}>
              <span className={styles.text}>
                We seek to inspire and educate drummers by using their own
                musicallity and from there to offer resources of contemporary
                drum education.
              </span>
            </div>
          </div>
          <div className={styles.logoAndTextContainer}>
            <div className={styles.logoAboveText}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  alt='logo'
                  src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                ></img>
              </div>
              <div className={styles.text}>Inspiration & Education</div>
            </div>
            <div className={styles.longText}>
              <div className={styles.paragraphs}>
                <p>
                  At Tierra y Aire, we believe that the heartbeat of drumming
                  begins with inspiration. Our programmes are created with
                  creativity, innovation, originality, improvisation and
                  extemporaneous drumming. We ensure the right balance for your
                  specific needs at every drumming level.
                </p>
                <br />
                <p>
                  Co-developed by the students, our curriculum has been
                  thoughtfully designed with your objectives in mind — we place
                  a priority on your progress and create fun drumming
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
