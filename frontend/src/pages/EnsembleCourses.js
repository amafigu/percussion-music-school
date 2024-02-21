import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./ensembleCourses.module.scss";

const EnsembleCourses = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  const navigateToPage = useNavigateToPage();

  useEffectScrollTop();
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
