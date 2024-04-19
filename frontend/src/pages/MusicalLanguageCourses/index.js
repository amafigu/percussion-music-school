import {
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const MusicalLanguageCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={handTechniqueCoursePageSecondImage}
      pageTranslationObj={"musicalLanguage"}
      invertLayout={true}
    />
  );
};
