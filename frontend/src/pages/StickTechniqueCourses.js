import UpperBanner from "#components/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageAdvancedBannerImage,
  stickTechniqueCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./stickTechniqueCourses.module.scss";

const StickTechniqueCourses = () => {
  const navigateToPage = useNavigateToPage();
  const translate = useTranslate();
  const text = translate.pages.courses;
  scrollToTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={stickTechniqueCoursesPageUpperSectionBackground}
          title={text.stickTechnique.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={ensembleCoursesPageAdvancedBannerImage}
          name={text.stickTechnique.subtitle}
          subtitle=''
          text={text.stickTechnique.description}
        />
      </div>
    </div>
  );
};

export default StickTechniqueCourses;
