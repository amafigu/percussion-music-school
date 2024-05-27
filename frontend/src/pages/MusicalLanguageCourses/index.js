import { musicalLanguageBackground } from "#constants/backgroundImages";
import { musicalLanguageCourses } from "#constants/images";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const MusicalLanguageCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageBackground}
      courseBannerImgPath={musicalLanguageCourses}
      pageTranslationObj={"musicalLanguage"}
      invertLayout={true}
    />
  );
};
