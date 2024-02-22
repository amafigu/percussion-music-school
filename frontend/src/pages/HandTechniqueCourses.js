import {
  ensembleCoursesPageIntermediateBannerImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const HandTechniqueCourses = () => {
  scrollToTop();

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
