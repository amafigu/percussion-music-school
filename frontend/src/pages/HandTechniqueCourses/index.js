import { musicalDirectionAndHandTechniqueBackground } from "#constants/backgroundImages";
import { ensembleCoursesPageIntermediateBannerImage } from "#constants/images";
import { CoursePageContent } from "#pages/CoursePageContent";
import React from "react";

export const HandTechniqueCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={ensembleCoursesPageIntermediateBannerImage}
      pageTranslationObj={"handTechnique"}
      invertLayout={true}
    />
  );
};
