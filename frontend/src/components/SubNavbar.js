import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./subNavbar.module.scss";
const SubNavbar = ({ navigate, items }) => {
  const translate = useTranslate();
  const text = translate.components.subNavbar;

  return (
    <div className={styles.linksRow}>
      <ul>
        {items.map((item) => (
          <li
            className={styles.listItem}
            onClick={() => navigate(item.path)}
            key={item.courseName}
          >
            <span>{text[item.courseName]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
