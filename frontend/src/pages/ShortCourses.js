import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  shortCoursesPageUpperSectionBackground,
  shortCoursesPageUpperSectionText,
  shortCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import OptionsToNavigate from "../components/OptionsToNavigate";
import styles from "./shortCourses.module.scss";

const ShortCourses = () => {
  useEffectScrollTop();
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={shortCoursesPageUpperSectionBackground}
          title={shortCoursesPageUpperSectionTitle}
          text={shortCoursesPageUpperSectionText}
        />

        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
      </div>
    </div>
  );
};

export default ShortCourses;
