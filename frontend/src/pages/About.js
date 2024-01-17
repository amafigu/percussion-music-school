import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  aboutPageNavigationItems,
  aboutPagePhilosophySectionBackground,
  aboutPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import styles from "./about.module.scss";

const About = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.about;
  useEffectScrollTop();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.aboutPage}>
        <UpperBanner
          backgroundUrl={aboutPageUpperSectionBackground}
          title={text.aboutPageUpperSectionTitle}
          text={text.aboutPageUpperSectionText}
        />
        <SubNavbar
          navigate={scrollToSection}
          items={aboutPageNavigationItems}
        />
        <section className={styles.educationSection} id='school'>
          <div className={styles.imageAndTextLayerContainer}>
            <img
              alt='inspiration'
              className={styles.imageEducation}
              src={`${process.env.PUBLIC_URL}/assets/about_page_school.png`}
            ></img>

            <div className={styles.textLayer}>
              <span className={styles.text}>{text.firstImageCard}</span>
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
            <div className={styles.paragraphsContainer}>
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

        <section className={styles.philosophySection} id='philosophy'>
          <div
            className={styles.imageForBigScreen}
            style={aboutPagePhilosophySectionBackground}
          ></div>

          <div className={styles.text}>
            <div className={styles.title}>
              <span>Our Philosophy</span>
            </div>
            <div className={styles.subtitle}>
              <span>{text.ourPhilosophySubtitle}</span>
            </div>
            <div className={styles.content}>
              <p>{text.ourPhilosophyFirst}</p>
              <p>{text.ourPhilosophySecond}</p>
            </div>
          </div>
        </section>

        <section className={styles.founderSection} id='founder'>
          <div className={styles.presentation}>
            <div className={styles.imageContaier}>
              <img
                alt='founder'
                className={styles.founderImage}
                src={`${process.env.PUBLIC_URL}/assets/card3.png`}
              />
            </div>
            <div className={styles.textAndIconsContainer}>
              <div className={styles.textAndIcons}>
                <div className={styles.name}>Rolo Veron</div>
                <div className={styles.position}>
                  Founder and Managing Director
                </div>
                <p>{text.artist.descriptionFirst}</p>
                <br />
                <p>{text.artist.descriptionSecond}</p>
                <div className={styles.socialIcons}>
                  <div className={styles.text}>Follow Rolo Veron @</div>
                  <div className={styles.row}>
                    <div className={styles.icons}>
                      <a
                        href='https://www.instagram.com/rolo.veron/'
                        target='_blanck'
                      >
                        <i
                          className={`fab fa-instagram fa-2x ${styles.customIcon}`}
                        ></i>
                      </a>
                      <a
                        href='https://www.facebook.com/rolo.veron.3'
                        target='_blanck'
                      >
                        <i
                          className={`fab fa-facebook-f fa-2x ${styles.customIcon}`}
                        ></i>
                      </a>
                      <a
                        href='https://www.youtube.com/channel/UCAHUUHVEh7ov0qv8FIE11ZQ'
                        target='_blanck'
                      >
                        <i
                          className={`fab fa-youtube fa-2x ${styles.customIcon}`}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
