import UpperBanner from "#components/ui/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import CourseBanner from "../components/ui/CourseBanner";
import SubNavbar from "../components/ui/SubNavbar";
import styles from "./ensembleCourses.module.scss";

const EnsembleCourses = () => {
  const translate = useTranslate();
  const text = translate.pages.courses;
  const navigateToPage = useNavigateToPage();

  scrollToTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={ensembleCoursesPageUpperSectionBackground}
          title={text.ensemble.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={ensembleCoursesPageBeginnerBannerImage}
          name={text.ensemble.subtitle}
          subtitle={""}
          text={text.ensemble.description}
        />
      </div>
    </div>
  );
};

export default EnsembleCourses;
