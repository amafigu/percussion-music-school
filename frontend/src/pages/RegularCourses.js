import UpperBanner from "#components/UpperBanner";
import {
  regularCoursesPageUpperSectionBackground,
  regularCoursesPageUpperSectionText,
  regularCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./regularCourses.module.scss";

const RegularCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={regularCoursesPageUpperSectionBackground}
          title={regularCoursesPageUpperSectionTitle}
          text={regularCoursesPageUpperSectionText}
        />

        <div className={styles.linksRow}>
          <ul>
            <li
              className={styles.listItem}
              onClick={() =>
                navitageToPage("/courses/regular", { relative: "path" })
              }
            >
              <span>regular courses</span>
            </li>

            <li
              className={styles.listItem}
              onClick={() =>
                navitageToPage("/courses/short-courses", { relative: "path" })
              }
            >
              <span>short courses</span>
            </li>
            <li
              className={styles.listItem}
              onClick={() =>
                navitageToPage("/courses/corporate", { relative: "path" })
              }
            >
              <span>corporate</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegularCourses;
