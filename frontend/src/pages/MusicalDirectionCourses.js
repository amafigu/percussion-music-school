import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  musicalLanguageCoursesPageUpperSectionBackground,
  stickTechniqueCoursePageOfferImage,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import styles from "./musicalDirectionCourses.module.scss";

const MusicalDirectionCourses = () => {
  const translate = useTranslate();
  const text = translate.pages.courses;
  const navigateToPage = useNavigateToPage();

  scrollToTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.musicalDirection.title}
          text={text.musicalDirection.subtitle}
        />

        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={stickTechniqueCoursePageOfferImage}
          name={text.musicalDirection.subtitle}
          subtitle={""}
          text={text.stickTechnique.description}
        />
      </div>
    </div>
  );
};

export default MusicalDirectionCourses;
