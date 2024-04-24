import { musicalLanguageCoursesPageUpperSectionBackground } from "#constants/backgroundImages";
import { stickTechniqueCoursePageOfferImage } from "#constants/linkImages";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const MusicalDirectionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={stickTechniqueCoursePageOfferImage}
      pageTranslationObj={"musicalDirection"}
      invertLayout={false}
    />
  );
};
