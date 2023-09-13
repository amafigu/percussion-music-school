import {
  aboutPagePhilosophySectionBackground,
  aboutPageUpperSectionBackground,
  aboutPageUpperSectionText,
  aboutPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import UpperBanner from "../components/UpperBanner";
import styles from "./about.module.scss";

const About = () => {
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
          title={aboutPageUpperSectionTitle}
          text={aboutPageUpperSectionText}
        />
        <div className={styles.linksRow}>
          <ul>
            <li
              className={styles.listItem}
              onClick={() => scrollToSection("school")}
            >
              <span>our school</span>
            </li>

            <li
              className={styles.listItem}
              onClick={() => scrollToSection("philosophy")}
            >
              <span>our philosophy</span>
            </li>
            <li
              className={styles.listItem}
              onClick={() => scrollToSection("founder")}
            >
              <span>our founder</span>
            </li>
          </ul>
        </div>
        <section className={styles.educationSection} id='school'>
          <div className={styles.imageAndTextLayerContainer}>
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
              <span>Skill should not be harnessed by hard work alone.</span>
            </div>
            <div className={styles.content}>
              At Tierra y Aire, we believe that passion is the fundamental
              building block to every student’s success. Through passion comes
              curiosity, and it is this very curiosity that would spur the
              student to continuously work, and learn, more on his or her craft.
              It is our responsibility, as educators, to fuel that curiosity in
              every student; constantly nurturing, guiding and motivating every
              student to eventually reach their individual and collective music
              objectives.
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
                <p>
                  The depth of Rolo’ musicality begins from his early musical
                  upbringing. Rolo discovered his love for music at a tender age
                  by experimenting with a many instruments such as electone
                  organ, guitar, bass, clarinet, flute, piano, drums, and
                  percussion.
                </p>
                <br />
                <p>
                  At 17, Rolo was introduced to master teacher Blair Sherrill, a
                  student of world-class drummer Super Drums and began private
                  drum lessons with Super Drums for four years in Rosario. He
                  started performing with Super Drums for bunch of stuff, and
                  gradually brought his performances to many campuses and around
                  town.
                </p>
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
