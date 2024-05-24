import { stickTechniqueBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageAdvancedBannerImage } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const StickTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={stickTechniqueBackground}
      courseBannerImgPath={ensembleCoursesPageAdvancedBannerImage}
      pageTranslationObj={"stickTechnique"}
      invertLayout={false}
    />
  );
};
