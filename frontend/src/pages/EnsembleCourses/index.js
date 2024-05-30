import { ensembleBackground } from "#constants/backgroundImages";
import { ensembleCourses } from "#constants/images";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const EnsembleCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={ensembleCourses}
      pageTranslationObj={"ensemble"}
      invertLayout={false}
    />
  );
};
