import { ensembleBackground } from "#constants/backgroundImages";
import { musicalLanguageCoursePageImage } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const EnsembleCompositionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={musicalLanguageCoursePageImage}
      pageTranslationObj={"ensembleComposition"}
      invertLayout={true}
    />
  );
};
