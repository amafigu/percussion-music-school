import { CoursePageContent } from "#pages/CoursePageContent";
import {
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
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
