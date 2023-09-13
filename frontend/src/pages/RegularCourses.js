import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  regularCoursePageBeginnerBannerImage,
  regularCoursePageBeginnerBannerName,
  regularCoursePageBeginnerBannerSubtitle,
  regularCoursePageBeginnerBannerText,
  regularCoursePageIntermediateBannerImage,
  regularCoursePageIntermediateBannerName,
  regularCoursePageIntermediateBannerSubtitle,
  regularCoursePageIntermediateBannerText,
  regularCoursesPageUpperSectionBackground,
  regularCoursesPageUpperSectionText,
  regularCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import OptionsToNavigate from "../components/OptionsToNavigate";
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

        <OptionsToNavigate
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={regularCoursePageBeginnerBannerImage}
          name={regularCoursePageBeginnerBannerName}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={regularCoursePageBeginnerBannerText}
        />
        <CourseBanner
          imageUrl={regularCoursePageBeginnerBannerImage}
          name={regularCoursePageBeginnerBannerName}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={regularCoursePageBeginnerBannerText}
          invert={true}
        />
        <CourseBanner
          imageUrl={regularCoursePageIntermediateBannerImage}
          name={regularCoursePageIntermediateBannerName}
          subtitle={regularCoursePageIntermediateBannerSubtitle}
          text={regularCoursePageIntermediateBannerText}
        />
      </div>
    </div>
  );
};

export default RegularCourses;
