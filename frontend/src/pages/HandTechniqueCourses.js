import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  shortCoursePageHolidayImage,
  shortCoursePageHolidayName,
  shortCoursePageHolidaySubtitle,
  shortCoursePageHolidayText,
  shortCoursePageIntroDrummingImage,
  shortCoursePageIntroDrummingName,
  shortCoursePageIntroDrummingSubtitle,
  shortCoursePageIntroDrummingText,
  shortCoursesPageUpperSectionBackground,
  shortCoursesPageUpperSectionText,
  shortCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./handTechniqueCourses.module.scss";

const HandTechniqueCourses = () => {
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

        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={shortCoursePageHolidayImage}
          name={shortCoursePageHolidayName}
          subtitle={shortCoursePageHolidaySubtitle}
          text={shortCoursePageHolidayText}
        />
        <CourseBanner
          imageUrl={shortCoursePageIntroDrummingImage}
          name={shortCoursePageIntroDrummingName}
          subtitle={shortCoursePageIntroDrummingSubtitle}
          text={shortCoursePageIntroDrummingText}
          invert={true}
        />
      </div>
    </div>
  );
};

export default HandTechniqueCourses;
