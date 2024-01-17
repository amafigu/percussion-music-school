import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  coursesPagesNavigationItems,
  shortCoursePageHolidayImage,
  shortCoursePageIntroDrummingImage,
  shortCoursePageIntroDrummingName,
  shortCoursePageIntroDrummingSubtitle,
  shortCoursePageIntroDrummingText,
  shortCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./handTechniqueCourses.module.scss";

const HandTechniqueCourses = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
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
          title={text.handTechnique.title}
          text={"texto corto definicion"}
        />
        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={shortCoursePageHolidayImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"algun subtitulo, o si queres Rolinho, no pones nada"}
          text={text.handTechnique.description}
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
