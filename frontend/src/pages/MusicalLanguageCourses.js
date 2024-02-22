import {
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const MusicalLanguageCourses = () => {
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
