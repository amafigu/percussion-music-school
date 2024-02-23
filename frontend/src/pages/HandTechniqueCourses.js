import {
  ensembleCoursesPageIntermediateBannerImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const HandTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageIntermediateBannerImage}
      pageTranslationObj={"handTechnique"}
      invertLayout={true}
    />
  );
};

export default HandTechniqueCourses;
