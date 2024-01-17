import UpperBanner from "#components/UpperBanner";
import {
  corporateCoursePageOfferImage,
  corporateCoursePageOfferName,
  corporateCoursePageOfferSubtitle,
  corporateCoursePageOfferText,
  corporateCoursesPageUpperSectionBackground,
  corporateCoursesPageUpperSectionText,
  corporateCoursesPageUpperSectionTitle,
  coursesPagesNavigationItems,
} from "#utils/constants";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";

import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import SubNavbar from "../components/SubNavbar";
import styles from "./stickTechniqueCourses.module.scss";

const StickTechniqueCourses = () => {
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
        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={corporateCoursePageOfferImage}
          name={corporateCoursePageOfferName}
          subtitle={corporateCoursePageOfferSubtitle}
          text={corporateCoursePageOfferText}
        />
      </div>
    </div>
  );
};

export default StickTechniqueCourses;
