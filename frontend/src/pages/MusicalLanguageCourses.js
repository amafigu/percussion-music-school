import CourseBanner from "#components/ui/CourseBanner";
import SubNavbar from "#components/ui/SubNavbar";
import UpperBanner from "#components/ui/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import styles from "./musicalLanguageCourses.module.scss";

const MusicalLanguageCourses = () => {
  const navigateToPage = useNavigateToPage();
  const translate = useTranslate();
  const text = translate.pages.courses;
  scrollToTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.musicalLanguage.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={handTechniqueCoursePageSecondImage}
          name={text.musicalLanguage.subtitle}
          subtitle=''
          text={text.musicalLanguage.description}
          invert={true}
        />
      </div>
    </div>
  );
};

export default MusicalLanguageCourses;
