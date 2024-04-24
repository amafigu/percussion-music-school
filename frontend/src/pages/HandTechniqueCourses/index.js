import { musicalLanguageCoursesPageUpperSectionBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageIntermediateBannerImage } from "#constants/linkImages";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const HandTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageIntermediateBannerImage}
      pageTranslationObj={"handTechnique"}
      invertLayout={true}
    />
  );
};
