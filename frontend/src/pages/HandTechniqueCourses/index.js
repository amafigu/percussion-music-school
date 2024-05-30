import { musicalDirectionAndHandTechniqueBackground } from "#constants/backgroundImages";
import { handTechniqueCourses } from "#constants/images";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const HandTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={handTechniqueCourses}
      pageTranslationObj={"handTechnique"}
      invertLayout={true}
    />
  );
};
