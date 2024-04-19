import { CoursePageContent } from "#pages/CoursePageContent";
import {
  ensembleCoursesPageIntermediateBannerImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
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
