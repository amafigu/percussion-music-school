import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";

import {
  coursesPagesNavigationItems,
  stickTechniqueCoursePageOfferImage,
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
          text={text.stickTechnique.subtitle}
        />
        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={stickTechniqueCoursePageOfferImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"subtitulo medio descriptivo"}
          text={text.stickTechnique.description}
        />
      </div>
    </div>
  );
};

export default StickTechniqueCourses;
