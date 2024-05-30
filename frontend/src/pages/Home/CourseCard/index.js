import { useTranslate } from "#hooks/useTranslate";
import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./courseCard.module.scss";

export const CourseCard = ({ name, description, path, image }) => {
  const translate = useTranslate();
  const text = translate.components.courseCard;

  return (
    <article className={styles.wrapper} aria-labelledby={`${name}-course`}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={`${name} course`}
        ></img>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3 id={`${name}-course`} className={styles.category}>
              {camelCaseToTitleCase(name)}
            </h3>
            <h4 className={styles.description}>
              {camelCaseToTitleCase(description)}
            </h4>
            <Link
              className={styles.link}
              to={path}
              aria-label={`See more about the ${name} course`}
            >
              {camelCaseToTitleCase(text.seeMore)}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
