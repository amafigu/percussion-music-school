import { stickTechniqueCoursesPageUpperSectionBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageAdvancedBannerImage } from "#constants/linkImages";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const StickTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={stickTechniqueCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageAdvancedBannerImage}
      pageTranslationObj={"stickTechnique"}
      invertLayout={false}
    />
  );
};
