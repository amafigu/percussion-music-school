import { musicalLanguageBackground } from "#constants/backgroundImages";
import { handTechniqueCoursePageSecondImage } from "#constants/linkImages";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const MusicalLanguageCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageBackground}
      courseBannerImgPath={handTechniqueCoursePageSecondImage}
      pageTranslationObj={"musicalLanguage"}
      invertLayout={true}
    />
  );
};
