import UpperBanner from "#components/UpperBanner";
import {
  corporateCoursesPageUpperSectionBackground,
  corporateCoursesPageUpperSectionText,
  corporateCoursesPageUpperSectionTitle,
  coursesPagesNavigationItems,
} from "#utils/constants";
import { useNavigate } from "react-router-dom";

import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import OptionsToNavigate from "../components/OptionsToNavigate";
import styles from "./corporateCourses.module.scss";

const CorporateCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };
  useEffectScrollTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={corporateCoursesPageUpperSectionBackground}
          title={corporateCoursesPageUpperSectionTitle}
          text={corporateCoursesPageUpperSectionText}
        />
        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
      </div>
    </div>
  );
};

export default CorporateCourses;
