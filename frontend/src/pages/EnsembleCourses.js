import {
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
import React from "react";
import { CoursePageContent } from "./CoursePageContent";

const EnsembleCourses = () => {
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
