import { NavigationMenu } from "#components/ui/NavigationMenu";
import UpperBanner from "#components/ui/UpperBanner";
import { useScrollToRef } from "#hooks/useScrollToRef";
import { useTranslate } from "#hooks/useTranslate";
import {
  aboutPagePhilosophySectionBackground,
  aboutPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import { useRef } from "react";
import styles from "./about.module.scss";

const About = () => {
  const translate = useTranslate();
  const text = translate.pages.about;
  const scrollToRef = useScrollToRef();
  const schoolSectionRef = useRef(null);
  const philosophySectionRef = useRef(null);
  const founderSectionRef = useRef(null);

  const navigationItems = [
    { ref: schoolSectionRef, name: "school" },
    { ref: philosophySectionRef, name: "philosophy" },
    { ref: founderSectionRef, name: "founder" },
  ];

  scrollToTop();

  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.aboutPage}>
        <UpperBanner
          backgroundUrl={aboutPageUpperSectionBackground}
          title={text.aboutPageUpperSectionTitle}
          text={text.aboutPageUpperSectionText}
        />
        <NavigationMenu
          navigationFunction={scrollToRef}
          items={navigationItems}
        />
        <section className={styles.educationSection} ref={schoolSectionRef}>
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
              <div className={styles.text}>
                {text.inspirationAndEducation.title}
              </div>
            </div>
            <div className={styles.paragraphsContainer}>
              <div className={styles.paragraphs}>
                <p>{text.inspirationAndEducation.firstParagraph}</p>
                <br />
                <p>{text.inspirationAndEducation.secondParagraph}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.philosophySection}
          ref={philosophySectionRef}
        >
          <div
            className={styles.imageForBigScreen}
            style={aboutPagePhilosophySectionBackground}
          ></div>

          <div className={styles.text}>
            <div className={styles.title}>
              <span>{text.ourPhilosophyTitle}</span>
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

        <section className={styles.founderSection} ref={founderSectionRef}>
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
                <div className={styles.position}>{text.artist.role}</div>
                <p>{text.artist.descriptionFirst}</p>
                <br />
                <p>{text.artist.descriptionSecond}</p>
                <div className={styles.socialIcons}>
                  <div className={styles.text}>
                    {text.artist.follow} Rolo Veron {text.artist.followAt}
                  </div>
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
