import { navigationMenuItems } from "#constants/navigationMenuItems";
import { useMenuContext } from "#context/menuContext";
import { useOnNavigate } from "#hooks/useOnNavigate";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./coursesList.module.scss";

export const CoursesList = () => {
  const { onNavigate } = useOnNavigate();
  const { setShowMobile, setShowCourses } = useMenuContext();
  const translate = useTranslate();
  const text = translate.pages.courses;

  return (
    <ul className={styles.list} aria-label='courses options'>
      {navigationMenuItems.map((item) => (
        <li
          key={item.name}
          className={styles.listItem}
          onClick={() => onNavigate([setShowMobile, setShowCourses], item.ref)}
          aria-label={item.name}
        >
          <span className={styles.title}>{text[item.name].title}</span>
        </li>
      ))}
    </ul>
  );
};
