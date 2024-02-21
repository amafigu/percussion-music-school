import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageUpperSectionBackground,
  musicalLanguageCoursePageImage,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import styles from "./ensembleCompositionCourses.module.scss";

const EnsembleCompositionCourses = () => {
  const navigateToPage = useNavigateToPage();
  const translate = useTranslate();
  const text = translate.pages.courses;
  useEffectScrollTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={ensembleCoursesPageUpperSectionBackground}
          title={text.ensembleComposition.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={musicalLanguageCoursePageImage}
          name={text.ensembleComposition.subtitle}
          subtitle=''
          text={text.ensembleComposition.description}
          invert={true}
        />
      </div>
    </div>
  );
};

export default EnsembleCompositionCourses;
