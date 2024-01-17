import useLocaleContext from "#context/localeContext";
import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesCardTeaser.module.scss";

const CoursesCardTeaser = () => {
  const { translate } = useLocaleContext();
  const textCards = translate.components.coursesCardTeaser.cards;

  return (
    <div className={styles.coursesCardTeaserWrapper}>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name={textCards.ensemble.title}
          path='/courses/ensemble'
          description={textCards.ensemble.description}
        />
        <CourseCard
          image='card2.png'
          name={textCards.handTechnique.title}
          path='/courses/hand-technique'
          description={textCards.handTechnique.description}
        />
        <CourseCard
          image='card3.png'
          name={textCards.stickTechnique.title}
          path='/courses/stick-technique'
          description={textCards.stickTechnique.description}
        />
      </div>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name={textCards.musicalLanguage.title}
          path='/courses/musical-language'
          description={textCards.musicalLanguage.description}
        />
        <CourseCard
          image='card2.png'
          name={textCards.musicalDirection.title}
          path='/courses/musical-direction'
          description={textCards.musicalDirection.description}
        />
        <CourseCard
          image='card3.png'
          name={textCards.ensembleComposition.title}
          path='/courses/ensemble-composition'
          description={textCards.ensembleComposition.description}
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
