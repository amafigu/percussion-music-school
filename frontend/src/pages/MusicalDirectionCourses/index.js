import { musicalDirectionAndHandTechniqueBackground } from "#constants/backgroundImages";
import { stickTechniqueCoursePageOfferImage } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const MusicalDirectionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={stickTechniqueCoursePageOfferImage}
      pageTranslationObj={"musicalDirection"}
      invertLayout={false}
    />
  );
};
