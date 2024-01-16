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
          path='/courses/regular'
          description={textCards.ensemble.description}
        />
        <CourseCard
          image='card2.png'
          name={textCards.handTechnique.title}
          path='/courses/short'
          description={textCards.handTechnique.description}
        />
        <CourseCard
          image='card3.png'
          name={textCards.stickTechnique.title}
          path='/courses/corporate'
          description={textCards.stickTechnique.description}
        />
      </div>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name={textCards.musicalLanguage.title}
          path='/courses/regular'
          description={textCards.musicalLanguage.description}
        />
        <CourseCard
          image='card2.png'
          name={textCards.musicalDirection.title}
          path='/courses/short'
          description={textCards.musicalDirection.description}
        />
        <CourseCard
          image='card3.png'
          name={textCards.ensembleComposition.title}
          path='/courses/corporate'
          description={textCards.ensembleComposition.description}
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
