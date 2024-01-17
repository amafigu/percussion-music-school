import useLocaleContext from "#context/localeContext";
import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesCardTeaser.module.scss";

const CoursesCardTeaser = () => {
  const { translate } = useLocaleContext();
  const textCards = translate.components.courses.titleAndDescription;
  console.log(textCards);
  return (
    <div className={styles.coursesCardTeaserWrapper}>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name={textCards.ensemble.title}
          path='/courses/ensemble'
          description={"algo"}
        />
        <CourseCard
          image='card2.png'
          name={textCards.handTechnique.title}
          path='/courses/hand-technique'
          description={"algo"}
        />
        <CourseCard
          image='card3.png'
          name={textCards.stickTechnique.title}
          path='/courses/stick-technique'
          description={"algo"}
        />
      </div>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name={textCards.musicalLanguage.title}
          path='/courses/musical-language'
          description={"algo"}
        />
        <CourseCard
          image='card2.png'
          name={textCards.musicalDirection.title}
          path='/courses/musical-direction'
          description={"algo"}
        />
        <CourseCard
          image='card3.png'
          name={textCards.ensembleComposition.title}
          path='/courses/ensemble-composition'
          description={"algo"}
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
