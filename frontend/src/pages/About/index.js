import { NavigationMenu } from "#components/ui/NavigationMenu";
import { UpperBanner } from "#components/ui/UpperBanner";
import { aboutPageUpperSectionBackground } from "#constants/backgroundImages";
import { STYLES } from "#constants/styles";
import { useScrollToRef } from "#hooks/useScrollToRef";
import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import { useRef } from "react";
import { EducationBanner } from "./EducationBanner";
import { FounderBanner } from "./FounderBanner";
import { PhilosophyBanner } from "./PhilosophyBanner";
import { Section } from "./Section";
import { SectionBanner } from "./Section/SectionBanner";
import styles from "./about.module.scss";

export const About = () => {
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

  const EDUCATION = STYLES.PAGES.ABOUT.SECTIONS.EDUCATION;
  const PHILOSOPHY = STYLES.PAGES.ABOUT.SECTIONS.PHILOSOPHY;

  scrollToTop();

  return (
    <main className={styles.aboutPageWrapper}>
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
        <Section className={EDUCATION.CONTAINER} ref={schoolSectionRef}>
          <SectionBanner
            parentClass={EDUCATION.BANNER.PARENT}
            imageSrc={`${process.env.PUBLIC_URL}/assets/about_page_school.png`}
            imageAlt={"inspiration"}
            imageClass={EDUCATION.BANNER.IMAGE}
            content={text.firstImageCard}
            textLayerClass={EDUCATION.BANNER.TEXT_LAYER}
            textClass={EDUCATION.BANNER.TEXT}
          />
          <EducationBanner />
        </Section>
        <Section className={PHILOSOPHY.CONTAINER} ref={philosophySectionRef}>
          <PhilosophyBanner />
        </Section>
        <Section className={"philosophySection"} ref={founderSectionRef}>
          <FounderBanner />
        </Section>
      </div>
    </main>
  );
};
