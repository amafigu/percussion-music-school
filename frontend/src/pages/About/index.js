import { NavigationMenu } from "#components/ui/NavigationMenu";
import { UpperBanner } from "#components/ui/UpperBanner";
import { musicalLanguageBackground } from "#constants/backgroundImages";
import { useTranslate } from "#hooks/useTranslate";
import { useRef } from "react";
import { EducationBanner } from "./EducationBanner";
import { FounderBanner } from "./FounderBanner";
import { InspirationBanner } from "./InspirationBanner";
import { PhilosophyBanner } from "./PhilosophyBanner";
import styles from "./about.module.scss";

export const About = () => {
  const translate = useTranslate();
  const text = translate.pages.about;

  const schoolSectionRef = useRef(null);
  const philosophySectionRef = useRef(null);
  const founderSectionRef = useRef(null);

  const navigationItems = [
    { ref: schoolSectionRef, name: "school" },
    { ref: philosophySectionRef, name: "philosophy" },
    { ref: founderSectionRef, name: "founder" },
  ];

  return (
    <main className={styles.wrapper} aria-label='about page'>
      <div className={styles.container}>
        <UpperBanner
          backgroundUrl={musicalLanguageBackground}
          title={text.aboutPageUpperSectionTitle}
          text={text.aboutPageUpperSectionText}
        />
        <NavigationMenu isScroll={true} items={navigationItems} />
        <InspirationBanner ref={schoolSectionRef} />
        <EducationBanner />
        <PhilosophyBanner ref={philosophySectionRef} />
        <FounderBanner ref={founderSectionRef} />
      </div>
    </main>
  );
};
