import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import {
  coursesPagesNavigationItems,
  musicalLanguageCoursesPageUpperSectionBackground,
  stickTechniqueCoursePageOfferImage,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import styles from "./musicalDirectionCourses.module.scss";

const MusicalDirectionCourses = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  const navigateToPage = useNavigateToPage();

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
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={stickTechniqueCoursePageOfferImage}
          name={text.musicalDirection.subtitle}
          subtitle={""}
          text={text.stickTechnique.description}
        />
      </div>
    </div>
  );
};

export default MusicalDirectionCourses;
