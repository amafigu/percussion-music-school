import {
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const EnsembleCourses = () => {
  scrollToTop();
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleCoursesPageUpperSectionBackground}
      courseBannerImgPath={ensembleCoursesPageBeginnerBannerImage}
      pageTranslationObj={"ensemble"}
      invertLayout={false}
    />
  );
};

export default EnsembleCourses;
