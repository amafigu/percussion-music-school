import { ensembleBackground } from "#constants/backgroundImages";
import { ensembleCompositionCourses } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const EnsembleCompositionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={ensembleCompositionCourses}
      pageTranslationObj={"ensembleComposition"}
      invertLayout={true}
    />
  );
};
