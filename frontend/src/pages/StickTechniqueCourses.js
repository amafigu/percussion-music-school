import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";

import {
  coursesPagesNavigationItems,
  ensembleCoursesPageAdvancedBannerImage,
  stickTechniqueCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./stickTechniqueCourses.module.scss";

const StickTechniqueCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  useEffectScrollTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={stickTechniqueCoursesPageUpperSectionBackground}
          title={text.stickTechnique.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navitageToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={ensembleCoursesPageAdvancedBannerImage}
          name={text.stickTechnique.subtitle}
          subtitle=''
          text={text.stickTechnique.description}
        />
      </div>
    </div>
  );
};

export default StickTechniqueCourses;
