import { ensembleBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageBeginnerBannerImage } from "#constants/images";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const EnsembleCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={ensembleCoursesPageBeginnerBannerImage}
      pageTranslationObj={"ensemble"}
      invertLayout={false}
    />
  );
};
