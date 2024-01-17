import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  regularCoursePageAdvancedBannerImage,
  regularCoursePageAdvancedBannerName,
  regularCoursePageAdvancedBannerSubtitle,
  regularCoursePageAdvancedBannerText,
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
import SubNavbar from "../components/SubNavbar";
import styles from "./ensembleCourses.module.scss";

const EnsembleCourses = () => {
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

        <SubNavbar
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
          imageUrl={regularCoursePageIntermediateBannerImage}
          name={regularCoursePageIntermediateBannerName}
          subtitle={regularCoursePageIntermediateBannerSubtitle}
          text={regularCoursePageIntermediateBannerText}
          invert={true}
        />

        <CourseBanner
          imageUrl={regularCoursePageAdvancedBannerImage}
          name={regularCoursePageAdvancedBannerName}
          subtitle={regularCoursePageAdvancedBannerSubtitle}
          text={regularCoursePageAdvancedBannerText}
        />
      </div>
    </div>
  );
};

export default EnsembleCourses;
