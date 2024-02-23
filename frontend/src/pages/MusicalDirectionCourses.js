import {
  musicalLanguageCoursesPageUpperSectionBackground,
  stickTechniqueCoursePageOfferImage,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const MusicalDirectionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageCoursesPageUpperSectionBackground}
      courseBannerImgPath={stickTechniqueCoursePageOfferImage}
      pageTranslationObj={"musicalDirection"}
      invertLayout={false}
    />
  );
};

export default MusicalDirectionCourses;
