import { CourseBanner } from "#components/ui/CourseBanner";
import { NavigationMenu } from "#components/ui/NavigationMenu";
import { UpperBanner } from "#components/ui/UpperBanner";
import { navigationMenuItems } from "#constants/navigationMenuItems";
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
  const translate = useTranslate();
  const text = translate.pages.courses;
  scrollToTop();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <UpperBanner
          backgroundUrl={upperBannerImgPath}
          title={text[pageTranslationObj].title}
          text={""}
        />
        <div className={styles.hiddeOnMobile}>
          <NavigationMenu isScroll={false} items={navigationMenuItems} />
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
