import { stickTechniqueBackground } from "#constants/backgroundImages";
import { stickTechniqueCourses } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const StickTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={stickTechniqueBackground}
      courseBannerImgPath={stickTechniqueCourses}
      pageTranslationObj={"stickTechnique"}
      invertLayout={false}
    />
  );
};
