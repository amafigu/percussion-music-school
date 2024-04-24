import { useTranslate } from "#hooks/useTranslate";
import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./courseCard.module.scss";

export const CourseCard = ({ name, description, path, image }) => {
  const translate = useTranslate();
  const text = translate.components.courseCard;

  return (
    <div className={styles.courseCardWrapper}>
      <div className={styles.courseCard}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/assets/${image}`}
          alt={name}
        ></img>
        <div className={styles.infoColumn}>
          <div className={styles.descriptionAndLink}>
            <div className={styles.category}>{camelCaseToTitleCase(name)}</div>
            <div className={styles.text}>
              {camelCaseToTitleCase(description)}
            </div>
            <Link className={styles.link} to={path}>
              {camelCaseToTitleCase(text.seeMore)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
