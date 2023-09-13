import UpperBanner from "#components/UpperBanner";
import {
  corporateCoursesPageUpperSectionBackground,
  corporateCoursesPageUpperSectionText,
  corporateCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import styles from "./corporateCourses.module.scss";

const CorporateCourses = () => {
  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={corporateCoursesPageUpperSectionBackground}
          title={corporateCoursesPageUpperSectionTitle}
          text={corporateCoursesPageUpperSectionText}
        />
      </div>
    </div>
  );
};

export default CorporateCourses;
