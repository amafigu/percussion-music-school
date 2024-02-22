import {
  ensembleCoursesPageAdvancedBannerImage,
  stickTechniqueCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";

import { CoursePageContent } from "./CoursePageContent";

const StickTechniqueCourses = () => {
  scrollToTop();

  return (
    <CoursePageContent
      upperBannerImgPath={stickTechniqueCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageAdvancedBannerImage}
      pageTranslationObj={"stickTechnique"}
      invertLayout={false}
    />
  );
};

export default StickTechniqueCourses;
