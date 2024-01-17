import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
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
  regularCoursePageIntermediateBannerName,
  regularCoursePageIntermediateBannerSubtitle,
  regularCoursePageIntermediateBannerText,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./ensembleCourses.module.scss";

const EnsembleCourses = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
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
          title={text.ensemble.title}
          text={"texto corto definicion"}
        />
        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={ensembleCoursesPageBeginnerBannerImage}
          name={regularCoursePageBeginnerBannerName}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={text.ensemble.description}
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

export default EnsembleCourses;
