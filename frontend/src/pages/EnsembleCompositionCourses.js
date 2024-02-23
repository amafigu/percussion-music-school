import {
  ensembleCoursesPageUpperSectionBackground,
  musicalLanguageCoursePageImage,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const EnsembleCompositionCourses = () => {
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
