import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import {
  coursesPagesNavigationItems,
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import styles from "./musicalLanguageCourses.module.scss";

const MusicalLanguageCourses = () => {
  const navigateToPage = useNavigateToPage();

  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  useEffectScrollTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.musicalLanguage.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={handTechniqueCoursePageSecondImage}
          name={text.musicalLanguage.subtitle}
          subtitle=''
          text={text.musicalLanguage.description}
          invert={true}
        />
      </div>
    </div>
  );
};

export default MusicalLanguageCourses;
