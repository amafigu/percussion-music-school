import { ensembleCoursesPageUpperSectionBackground } from "#constants/backgroundImages";
import { musicalLanguageCoursePageImage } from "#constants/linkImages";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const EnsembleCompositionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleCoursesPageUpperSectionBackground}
      courseBannerImgPath={musicalLanguageCoursePageImage}
      pageTranslationObj={"ensembleComposition"}
      invertLayout={true}
    />
  );
};
