import { CourseBanner } from "#components/ui/CourseBanner";
import { NavigationMenu } from "#components/ui/NavigationMenu";
import { UpperBanner } from "#components/ui/UpperBanner";
import { coursesPagesNavigationItems } from "#constants/coursesPagesNavigationItems";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import { scrollToTop } from "#utils/utils";
import React from "react";
import styles from "./coursePageContent.module.scss";

export const CoursePageContent = ({
  upperBannerImgPath,
  courseBannerImgPath,
  pageTranslationObj,
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
          title={text[pageTranslationObj].title}
          text={""}
        />
        <div className={styles.hiddeMobile}>
          <NavigationMenu
            navigationFunction={navigateToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={courseBannerImgPath}
          name={text[pageTranslationObj].subtitle}
          text={text[pageTranslationObj].description}
          invert={invertLayout}
        />
      </div>
    </div>
  );
};
