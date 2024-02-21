import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageIntermediateBannerImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import styles from "./handTechniqueCourses.module.scss";

const HandTechniqueCourses = () => {
  scrollToTop();

  const translate = useTranslate();
  const text = translate.pages.courses;
  const navigateToPage = useNavigateToPage();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.handTechnique.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={ensembleCoursesPageIntermediateBannerImage}
          name={text.handTechnique.subtitle}
          subtitle=''
          text={text.handTechnique.description}
          invert={true}
        />
      </div>
    </div>
  );
};

export default HandTechniqueCourses;
