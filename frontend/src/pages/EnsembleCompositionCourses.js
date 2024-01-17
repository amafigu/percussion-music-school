import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  coursesPagesNavigationItems,
  ensembleCoursesPageAdvancedBannerImage,
  ensembleCoursesPageBeginnerBannerImage,
  ensembleCoursesPageIntermediateBannerImage,
  ensembleCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ensembleCompositionCourses.module.scss";

const EnsembleCompositionCourses = () => {
  const navigate = useNavigate();

  const navitageToPage = (route) => {
    navigate(route);
  };

  const { translate } = useLocaleContext();
  const text = translate.pages.courses;
  useEffectScrollTop();

  return (
    <div className={styles.coursesPageWrapper}>
      <div className={styles.coursesPage}>
        <UpperBanner
          backgroundUrl={ensembleCoursesPageUpperSectionBackground}
          title={text.ensembleComposition.title}
          text={text.ensembleComposition.subtitle}
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
          subtitle={"algun subtitulo, o si queres Rolinho, no pones nada"}
          text={text.ensembleComposition.description}
        />

        <CourseBanner
          imageUrl={ensembleCoursesPageIntermediateBannerImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"algun subtitulo, o si queres Rolinho, no pones nada"}
          text={
            "pensalo siempre en el combo - titulo, subtitulo, y text al lado de una image, avisa que imagenes queres poner adonde, los textos mandame por mensaje de texto y no de audio, asi puedo copiar y pegar"
          }
          invert={true}
        />

        <CourseBanner
          imageUrl={ensembleCoursesPageAdvancedBannerImage}
          name={"algun titulo, algo como -Objetivos-"}
          subtitle={"algun subtitulo, o si queres Rolinho, no pones nada"}
          text={
            "pensalo siempre en el combo - titulo, subtitulo, y text al lado de una image, avisa que imagenes queres poner adonde, los textos mandame por mensaje de texto y no de audio, asi puedo copiar y pegar"
          }
        />
      </div>
    </div>
  );
};

export default EnsembleCompositionCourses;
