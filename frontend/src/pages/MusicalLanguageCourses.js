import CourseBanner from "#components/CourseBanner";
import SubNavbar from "#components/SubNavbar";
import UpperBanner from "#components/UpperBanner";
import useLocaleContext from "#context/localeContext";
import {
  coursesPagesNavigationItems,
  handTechniqueCoursePageSecondImage,
  musicalLanguageCoursePageImage,
  musicalLanguageCoursesPageUpperSectionBackground,
} from "#utils/constants";
import { useEffectScrollTop } from "#utils/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./musicalLanguageCourses.module.scss";

const MusicalLanguageCourses = () => {
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
          backgroundUrl={musicalLanguageCoursesPageUpperSectionBackground}
          title={text.musicalLanguage.title}
          text={"texto corto definicion"}
        />

        <SubNavbar
          navigate={navitageToPage}
          items={coursesPagesNavigationItems}
        />
        <CourseBanner
          imageUrl={handTechniqueCoursePageSecondImage}
          name={"algun titulo cortina"}
          subtitle='subtitulo frasesinha sugundungu'
          text={text.musicalLanguage.description}
        />
        <CourseBanner
          imageUrl={musicalLanguageCoursePageImage}
          name={"algun titulo, como en el bloque anterior,"}
          subtitle=' subitiulo cortina'
          text={
            "pensalo siempre en el combo - titulo, subtitulo, y text al lado de una image, avisa que imagenes queres poner adonde, los textos mandame por mensaje de texto y no de audio, asi puedo copiar y pegar"
          }
          invert={true}
        />
      </div>
    </div>
  );
};

export default MusicalLanguageCourses;
