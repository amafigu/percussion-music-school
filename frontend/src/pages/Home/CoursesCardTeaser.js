import React from "react";
import CourseCard from "./CourseCard";
import styles from "./coursesCardTeaser.module.scss";

const CoursesCardTeaser = () => {
  return (
    <div className={styles.coursesCardTeaserWrapper}>
      <div className={styles.coursesCardTeaser}>
        <CourseCard
          image='card1.png'
          name='Regular'
          path='/programs/regular'
          description='The Regular Programme is designed for students with medium to long-term goals in mastering the instrument through one-on-one weekly drum lessons.'
        />
        <CourseCard
          image='card2.png'
          name='Short Courses '
          path='/programs/short-courses'
          description='The Short Course is for students with specific goals and limited time. These courses are crafted to help you get started on learning the basic concepts to drumming.'
        />
        <CourseCard
          image='card3.png'
          name='Corporate '
          path='/programs/corporate'
          description='We incorporate drumming into team building programmes that allow our participants to experience the fun and unity through music and drums.'
        />
      </div>
    </div>
  );
};

export default CoursesCardTeaser;
