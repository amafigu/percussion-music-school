import CourseBanner from "#components/ui/CourseBanner";
import SubNavbar from "#components/ui/SubNavbar";
import UpperBanner from "#components/ui/UpperBanner";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import { coursesPagesNavigationItems } from "#utils/constants";
import { scrollToTop } from "#utils/utils";
import React from "react";
import styles from "./coursePageContent.module.scss";

export const CoursePageContent = ({
  upperBannerImgPath,
  courseBannerImgPath,
  invertLayout,
}) => {
  const navigateToPage = useNavigateToPage();
  const translate = useTranslate();
  const text = translate.pages.courses;
  scrollToTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={upperBannerImgPath}
          title={text.handTechnique.title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={courseBannerImgPath}
          name={text.handTechnique.subtitle}
          subtitle=''
          text={text.handTechnique.description}
          invert={invertLayout}
        />
      </div>
    </div>
  );
};
