import UpperBanner from "#components/UpperBanner";
import {
  shortCoursesPageUpperSectionBackground,
  shortCoursesPageUpperSectionText,
  shortCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import styles from "./shortCourses.module.scss";

const ShortCourses = () => {
  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={shortCoursesPageUpperSectionBackground}
          title={shortCoursesPageUpperSectionTitle}
          text={shortCoursesPageUpperSectionText}
        />
      </div>
    </div>
  );
};

export default ShortCourses;
