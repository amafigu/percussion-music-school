import {
  musicalLanguageCoursesPageUpperSectionBackground,
  stickTechniqueCoursePageOfferImage,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const MusicalDirectionCourses = () => {
  scrollToTop();
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
