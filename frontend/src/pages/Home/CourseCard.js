import React from "react";
import { Link } from "react-router-dom";
import styles from "./courseCard.module.scss";
const CourseCard = ({ name, description, path, image }) => {
  return (
    <div className={styles.courseCardWrapper}>
      <div className={styles.courseCard}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/assets/${image}`}
          alt={name}
        ></img>
        <div className={styles.infoColumn}>
          <div className={styles.category}>{name}</div>
          <div className={styles.description}>{description}</div>
          <Link className={styles.link} to={path}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
