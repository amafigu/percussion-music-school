import {
  ensembleCoursesPageUpperSectionBackground,
  musicalLanguageCoursePageImage,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const EnsembleCompositionCourses = () => {
  scrollToTop();

  return (
    <CoursePageContent
      upperBannerImgPath={ensembleCoursesPageUpperSectionBackground}
      courseBannerImgPath={musicalLanguageCoursePageImage}
      pageTranslationObj={"ensembleComposition"}
      invertLayout={true}
    />
  );
};

export default EnsembleCompositionCourses;
