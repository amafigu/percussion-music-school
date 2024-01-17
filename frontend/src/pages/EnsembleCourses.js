import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageAdvancedBannerImage,
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageIntermediateBannerImage,
  ensembleCoursesPageUpperSectionBackground,
  regularCoursePageBeginnerBannerSubtitle,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import CourseBanner from "../components/CourseBanner";
import SubNavbar from "../components/SubNavbar";
import styles from "./ensembleCourses.module.scss";

const EnsembleCourses = () => {
  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  useEffectScrollTop();
  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={ensembleCoursesPageUpperSectionBackground}
          title={text.ensemble.title}
          text={text.ensemble.subtitle}
        />
        <div className={styles.hiddeMobile}>
          <SubNavbar
            navigate={navitageToPage}
            items={coursesPagesNavigationItems}
          />
        </div>
        <CourseBanner
          imageUrl={ensembleCoursesPageBeginnerBannerImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={regularCoursePageBeginnerBannerSubtitle}
          text={text.ensemble.description}
        />
        <CourseBanner
          imageUrl={ensembleCoursesPageIntermediateBannerImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle='pensalo siempre en el combo - titulo, subtitulo, y text al lado de una image, avisa que imagenes queres poner adonde, los textos mandame por mensaje de texto y no de audio, asi puedo copiar y pegar'
          text={"PONELE ALGO COMO ESTA EN TEXT ANTERIOR ROLO"}
          invert={true}
        />
        <CourseBanner
          imageUrl={ensembleCoursesPageAdvancedBannerImage}
          name={"algun titulo, como en el bloque anterior,"}
          subtitle=' pensalo siempre en el combo - titulo, subtitulo, y text al lado de una image, avisa que imagenes queres poner adonde, los textos mandame por mensaje de texto y no de audio, asi puedo copiar y pegar'
          text={"PONELE ALGO COMO ESTA EN TEXT ANTERIOR ROLO"}
        />
      </div>
    </div>
  );
};

export default EnsembleCourses;
