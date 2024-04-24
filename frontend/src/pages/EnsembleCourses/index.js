import { ensembleCoursesPageUpperSectionBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageBeginnerBannerImage } from "#constants/linkImages";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const EnsembleCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageBeginnerBannerImage}
      pageTranslationObj={"ensemble"}
      invertLayout={false}
    />
  );
};
