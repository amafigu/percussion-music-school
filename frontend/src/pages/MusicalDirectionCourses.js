import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  coursesPagesNavigationItems,
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursePageImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./musicalDirectionCourses.module.scss";

const MusicalDirectionCourses = () => {
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
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.musicalDirection.title}
          text={text.musicalDirection.subtitle}
        />

        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navitageToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={handTechniqueCoursePageSecondImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"subtitulitus"}
          text={text.musicalDirection.description}
        />
        <CourseBanner
          imageUrl={musicalLanguageCoursePageImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"subtitulitus"}
          text={
            "text descriptivo que me lo mandas por mensaje de texto, email o paloma mensajera, pero no por audio"
          }
          invert={true}
        />
      </div>
    </div>
  );
};

export default MusicalDirectionCourses;
