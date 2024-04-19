import {
  ensembleCoursesPageAdvancedBannerImage,
  stickTechniqueCoursesPageUpperSectionBackground,
} from "#utils/constants";
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
