import { useCourseCards } from "#hooks/useCourseCards";
import React from "react";
import { CourseCard } from "../CourseCard";
import styles from "./courseCards.module.scss";

export const CourseCards = () => {
  const { courseCards } = useCourseCards();

  return (
    <section className={styles.wrapper} aria-label='courses cards'>
      <div className={styles.container}>
        {courseCards &&
          courseCards.map((card) => (
            <CourseCard
              image={card.image}
              name={card.name}
              path={card.path}
              description={card.description}
              key={card.name}
            />
          ))}
      </div>
    </section>
  );
};
