import {
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const MusicalLanguageCourses = () => {
  scrollToTop();

  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={handTechniqueCoursePageSecondImage}
      pageTranslationObj={"musicalLanguage"}
      invertLayout={true}
    />
  );
};

export default MusicalLanguageCourses;
