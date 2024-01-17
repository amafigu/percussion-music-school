import UpperBanner from "#components/UpperBanner";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageAdvancedBannerImage,
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageIntermediateBannerImage,
  ensembleCoursesPageUpperSectionBackground,
  regularCoursePageAdvancedBannerName,
  regularCoursePageAdvancedBannerSubtitle,
  regularCoursePageAdvancedBannerText,
  regularCoursePageBeginnerBannerName,
  regularCoursePageBeginnerBannerSubtitle,
  regularCoursePageBeginnerBannerText,
  regularCoursePageIntermediateBannerName,
  regularCoursePageIntermediateBannerSubtitle,
  regularCoursePageIntermediateBannerText,
  regularCoursesPageUpperSectionText,
  regularCoursesPageUpperSectionTitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./ensembleCompositionCourses.module.scss";

const EnsembleCompositionCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={ensembleCoursesPageUpperSectionBackground}
          title={regularCoursesPageUpperSectionTitle}
          text={regularCoursesPageUpperSectionText}
        />

        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={ensembleCoursesPageBeginnerBannerImage}
          name={regularCoursePageBeginnerBannerName}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={regularCoursePageBeginnerBannerText}
        />

        <CourseBanner
          imageUrl={ensembleCoursesPageIntermediateBannerImage}
          name={regularCoursePageIntermediateBannerName}
          subtitle={regularCoursePageIntermediateBannerSubtitle}
          text={regularCoursePageIntermediateBannerText}
          invert={true}
        />

        <CourseBanner
          imageUrl={ensembleCoursesPageAdvancedBannerImage}
          name={regularCoursePageAdvancedBannerName}
          subtitle={regularCoursePageAdvancedBannerSubtitle}
          text={regularCoursePageAdvancedBannerText}
        />
      </div>
    </div>
  );
};

export default EnsembleCompositionCourses;
