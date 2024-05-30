import { musicalDirectionAndHandTechniqueBackground } from "#constants/backgroundImages";
import { musicalDirectionCourses } from "#constants/images";
import React from "react";
import { CoursePageContent } from "../CoursePageContent";

export const MusicalDirectionCourses = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={musicalDirectionCourses}
      pageTranslationObj={"musicalDirection"}
      invertLayout={false}
    />
  );
};
